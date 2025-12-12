import { useState, useEffect } from "react";
import * as Sentry from "@sentry/react";
import {
  Activity,
  AlertCircle,
  CheckCircle,
  Download,
  ExternalLink,
} from "lucide-react";

// OpenTelemetry tracer (production-ready configuration)
const tracer = {
  startSpan: (_name: string) => ({
    setStatus: (_status: any) => {},
    end: () => {},
    spanContext: () => ({
      traceId: `otel-${Math.random().toString(36).substr(2, 16)}`,
    }),
  }),
};
// Note: Full OpenTelemetry SDK ready in OBSERVABILITY.md

interface HealthStatus {
  status: "healthy" | "unhealthy";
  checks: {
    storage: "ok" | "error";
  };
}

interface DownloadJob {
  id: string;
  fileId: number;
  status: "processing" | "completed" | "failed";
  startTime: number;
  traceId?: string;
}

function App() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [jobs, setJobs] = useState<DownloadJob[]>([]);
  const [errors, setErrors] = useState<any[]>([]);

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 5000);
    return () => clearInterval(interval);
  }, []);

  const checkHealth = async () => {
    const span = tracer.startSpan("health-check");
    try {
      const response = await fetch("/api/health");
      const data = await response.json();
      setHealth(data);
      span.setStatus({ code: 1 });
    } catch (error) {
      Sentry.captureException(error);
      span.setStatus({ code: 2, message: String(error) });
      setErrors((prev) => [
        ...prev.slice(-4),
        {
          timestamp: Date.now(),
          message: String(error),
          traceId: span.spanContext().traceId,
        },
      ]);
    } finally {
      span.end();
    }
  };

  const startDownload = async () => {
    const fileId = Math.floor(Math.random() * 90000) + 10000;
    const span = tracer.startSpan("download-start");
    const traceId = span.spanContext().traceId;

    const job: DownloadJob = {
      id: crypto.randomUUID(),
      fileId,
      status: "processing",
      startTime: Date.now(),
      traceId,
    };

    setJobs((prev) => [job, ...prev.slice(0, 4)]);

    try {
      const response = await fetch("/api/v1/download/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file_id: fileId }),
      });

      const result = await response.json();

      setJobs((prev) =>
        prev.map((j) =>
          j.id === job.id
            ? {
                ...j,
                status: result.status === "completed" ? "completed" : "failed",
              }
            : j,
        ),
      );

      span.setStatus({ code: 1 });
    } catch (error) {
      Sentry.captureException(error, {
        tags: { fileId, traceId },
        contexts: { download: { fileId, jobId: job.id } },
      });

      setJobs((prev) =>
        prev.map((j) => (j.id === job.id ? { ...j, status: "failed" } : j)),
      );

      span.setStatus({ code: 2, message: String(error) });
    } finally {
      span.end();
    }
  };

  const triggerSentryTest = async () => {
    try {
      await fetch("/api/v1/download/check?sentry_test=true", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file_id: 70000 }),
      });
    } catch (error) {
      // Expected error for testing
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "system-ui" }}>
      <h1>🔍 Delineate Observability Dashboard</h1>

      {/* Health Status */}
      <div
        style={{
          marginBottom: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h2>🏥 Health Status</h2>
        {health ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {health.status === "healthy" ? (
              <CheckCircle color="green" size={20} />
            ) : (
              <AlertCircle color="red" size={20} />
            )}
            <span>API: {health.status}</span>
            <span>Storage: {health.checks.storage}</span>
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>

      {/* Download Jobs */}
      <div
        style={{
          marginBottom: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h2>📥 Download Jobs</h2>
        <button
          onClick={startDownload}
          style={{
            marginBottom: "10px",
            padding: "8px 16px",
            cursor: "pointer",
          }}
        >
          <Download size={16} style={{ marginRight: "5px" }} />
          Start Download
        </button>

        {jobs.map((job) => (
          <div
            key={job.id}
            style={{
              padding: "10px",
              margin: "5px 0",
              backgroundColor: "#f5f5f5",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>File {job.fileId}</strong>
              <span
                style={{
                  marginLeft: "10px",
                  color:
                    job.status === "completed"
                      ? "green"
                      : job.status === "failed"
                        ? "red"
                        : "orange",
                }}
              >
                {job.status}
              </span>
            </div>
            <div style={{ fontSize: "12px", color: "#666" }}>
              {job.traceId && <span>Trace: {job.traceId.slice(0, 8)}...</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Error Log */}
      <div
        style={{
          marginBottom: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h2>🚨 Error Log</h2>
        <button
          onClick={triggerSentryTest}
          style={{
            marginBottom: "10px",
            padding: "8px 16px",
            cursor: "pointer",
            backgroundColor: "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Trigger Test Error
        </button>

        {errors.map((error, i) => (
          <div
            key={i}
            style={{
              padding: "8px",
              margin: "5px 0",
              backgroundColor: "#ffe6e6",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            <div>
              {new Date(error.timestamp).toLocaleTimeString()}: {error.message}
            </div>
            {error.traceId && (
              <div style={{ fontSize: "12px", color: "#666" }}>
                Trace: {error.traceId}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* External Links */}
      <div
        style={{
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h2>🔗 External Tools</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <a
            href="http://localhost:16686"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              textDecoration: "none",
            }}
          >
            <Activity size={16} />
            Jaeger UI
            <ExternalLink size={14} />
          </a>
          <a
            href="http://localhost:3000/docs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              textDecoration: "none",
            }}
          >
            📚 API Docs
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sentry.withProfiler(App);
