"use client";
import { useState } from "react";
import { Brain, Calculator, ArrowRight, Activity } from "lucide-react";

export default function AnalyticsSandbox() {
  const [spend, setSpend] = useState(5000);
  const [users, setUsers] = useState(1200);
  const [age, setAge] = useState(30);
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const runModel = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          marketing_spend: spend,
          active_users: users,
          avg_customer_age: age
        })
      });
      const data = await response.json();
      
      // Artificial delay to make it feel like a heavy calculation
      setTimeout(() => {
        setResult(data);
        setLoading(false);
      }, 800);
      
    } catch (error) {
      console.error("Failed to fetch prediction");
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto h-full flex flex-col">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Brain className="text-purple-500" />
          Analytics Sandbox
        </h1>
        <p className="text-neutral-400">
          Interact with a live Python API computing a predictive revenue model.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        
        {/* Input Panel */}
        <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Calculator size={20} className="text-blue-500" />
            Model Parameters
          </h2>
          
          <div className="space-y-8">
            <ParameterSlider 
              label="Marketing Spend ($)" 
              value={spend} min={1000} max={20000} step={500} 
              onChange={(e) => setSpend(Number(e.target.value))} 
            />
            <ParameterSlider 
              label="Active Users" 
              value={users} min={100} max={10000} step={100} 
              onChange={(e) => setUsers(Number(e.target.value))} 
            />
            <ParameterSlider 
              label="Avg Customer Age" 
              value={age} min={18} max={65} step={1} 
              onChange={(e) => setAge(Number(e.target.value))} 
            />
            
            <button 
              onClick={runModel}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {loading ? "Running Python Model..." : "Run Prediction"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-[#0a0a0a] border border-neutral-800 rounded-xl p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Activity size={20} className="text-emerald-500" />
            API Output (JSON)
          </h2>
          
          <div className="flex-1 bg-black border border-neutral-800 rounded-lg p-6 font-mono text-sm text-emerald-400 overflow-auto flex items-center justify-center">
            {loading ? (
              <div className="animate-pulse text-neutral-500">Processing tensors...</div>
            ) : result ? (
              <pre className="w-full h-full text-left">
                {JSON.stringify(result, null, 2)}
              </pre>
            ) : (
              <div className="text-neutral-600 text-center">
                Awaiting input parameters.<br/>Click "Run Prediction" to execute the model.
              </div>
            )}
          </div>
          
          {result && !loading && (
             <div className="mt-6 p-4 bg-emerald-900/20 border border-emerald-900/50 rounded-lg">
               <p className="text-emerald-500 font-bold text-lg mb-1">Predicted Revenue: ${result.predicted_revenue.toLocaleString()}</p>
               <p className="text-emerald-600/80 text-sm">Margin of Error: {result.margin_of_error}</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ParameterSlider({ label, value, min, max, step, onChange }: any) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="font-medium text-neutral-300">{label}</label>
        <span className="text-blue-400 font-mono">{value.toLocaleString()}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step}
        value={value} 
        onChange={onChange}
        className="w-full accent-blue-500 h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer" 
      />
    </div>
  );
}
