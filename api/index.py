from fastapi import FastAPI

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

@app.get("/api/health")
def health_check():
    return {"status": "ok", "message": "Python Backend is successfully connected!"}

@app.get("/api/stats")
def get_stats():
    # In the future, this will connect to real data sources or models
    return {
        "projects_completed": 15,
        "models_trained": 42,
        "coffee_cups": 340
    }
