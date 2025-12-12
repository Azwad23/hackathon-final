# Observability Dashboard Setup Guide

## Sentry Setup

1. **Create Sentry Project**:
   - Go to https://sentry.io
   - Create new project (React)
   - Copy DSN from project settings

2. **Configure Environment**:
   ```bash
   # Add to frontend/.env
   VITE_SENTRY_DSN=https://your-dsn@sentry.io/project-id
   ```

## OpenTelemetry Setup

1. **Install Dependencies**:

   ```bash
   cd frontend
   npm install @opentelemetry/api @opentelemetry/sdk-browser @opentelemetry/exporter-trace-otlp-http
   ```

2. **Configure Collector**:
   ```yaml
   # docker-compose.yml
   otel-collector:
     image: otel/opentelemetry-collector:latest
     ports:
       - "4317:4317"
       - "4318:4318"
   ```

## Running Full Stack

```bash
# Start all services
docker compose -f docker/compose.dev.yml up -d

# Access services
# - Frontend: http://localhost:3001
# - API: http://localhost:3000
# - Jaeger: http://localhost:16686
# - MinIO: http://localhost:9001
```

## Testing Observability

1. **Test Sentry Integration**:

   ```bash
   curl -X POST "http://localhost:3000/v1/download/check?sentry_test=true" \
     -H "Content-Type: application/json" \
     -d '{"file_id": 70000}'
   ```

2. **View Traces in Jaeger**:
   - Open http://localhost:16686
   - Search for service: delineate-dashboard
   - View trace correlation
