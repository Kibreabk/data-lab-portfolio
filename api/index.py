from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

# Define the data structure we expect from the React frontend
class PredictionRequest(BaseModel):
    marketing_spend: float
    active_users: int
    avg_customer_age: int

@app.get("/api/health")
def health_check():
    return {"status": "ok", "message": "Python Backend is successfully connected!"}

@app.post("/api/predict")
def run_prediction(req: PredictionRequest):
    """
    This is a simulated predictive model endpoint.
    In the future, you can load a real trained scikit-learn (.pkl) 
    or XGBoost model here to process the incoming data!
    """
    
    # Simulated Linear Regression Formula
    base_revenue = 15000.0
    spend_impact = req.marketing_spend * 3.2
    user_impact = req.active_users * 18.5
    age_penalty = (req.avg_customer_age - 25) * 120.0 
    
    predicted_revenue = base_revenue + spend_impact + user_impact - age_penalty
    
    return {
        "status": "success",
        "model_used": "Simulated Multi-Linear Regression",
        "predicted_revenue": round(max(0, predicted_revenue), 2),
        "confidence_score": "92.4%",
        "margin_of_error": "+/- $1,250"
    }
