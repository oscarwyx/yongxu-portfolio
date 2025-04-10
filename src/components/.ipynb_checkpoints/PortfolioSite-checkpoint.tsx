import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mentalHealthData = [
  { model: "Random Forest", accuracy: 59.11, f1: 0.57 },
  { model: "Decision Tree", accuracy: 49.09, f1: 0.49 },
  { model: "QDA", accuracy: 42.29, f1: 0.42 },
  { model: "SVM", accuracy: 35.04, f1: 0.34 },
  { model: "LDA", accuracy: 29.64, f1: 0.29 },
];

const bollingerData = [
  { year: "2019", sharpe: 0.92 },
  { year: "2020", sharpe: 0.88 },
  { year: "2021", sharpe: 0.61 },
  { year: "2022", sharpe: 0.73 },
  { year: "2023", sharpe: 0.65 },
];

const timeSeriesData = [
  { model: "ARIMA", rmse: 0.01906 },
  { model: "ARIMA-GARCH", rmse: 0.01878 },
  { model: "VAR", rmse: 0.01902 },
  { model: "Bi-LSTM (2)", rmse: 0.00194 },
  { model: "Bi-LSTM (8)", rmse: 0.00117 },
];

export default function PortfolioSite() {
  return (
    <div className="p-8 space-y-10 bg-gradient-to-b from-white to-slate-100 min-h-screen">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-blue-900">Yongxu Wang</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Aspiring Data Scientist with dual Master's degrees from Johns Hopkins (Applied Mathematics & Statistics) and Columbia University (Statistics). I love using data to solve real-world problems in finance, healthcare, and beyond.
        </p>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">🔍 Interests</h2>
          <p>Predictive Modeling, Time Series Analysis, Financial Data Science, Risk Analytics, Statistical Learning</p>
          <h2 className="text-xl font-semibold">🛠️ Skills</h2>
          <p>Python (pandas, NumPy, scikit-learn), SQL, R, SAS, Tableau, Machine Learning, Deep Learning (LSTM), Data Visualization</p>
        </div>
      </header>

      <Tabs defaultValue="mental" className="w-full">
        <TabsList className="bg-white shadow-md p-1 rounded-xl">
          <TabsTrigger value="mental">Mental Health Classification</TabsTrigger>
          <TabsTrigger value="bollinger">ETF Trading with Bollinger Bands</TabsTrigger>
          <TabsTrigger value="timeseries">Stock Forecasting</TabsTrigger>
        </TabsList>

        <TabsContent value="mental">
          <Card className="mt-6 shadow-lg rounded-xl">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Model Accuracy Comparison</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mentalHealthData}>
                  <XAxis dataKey="model" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="accuracy" stroke="blue" name="Accuracy (%)" />
                  <Line type="monotone" dataKey="f1" stroke="green" name="F1 Score" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bollinger">
          <Card className="mt-6 shadow-lg rounded-xl">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Sharpe Ratio by Year</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={bollingerData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sharpe" stroke="purple" name="Sharpe Ratio" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeseries">
          <Card className="mt-6 shadow-lg rounded-xl">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Time Series Forecast RMSE</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timeSeriesData}>
                  <XAxis dataKey="model" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="rmse" stroke="red" name="RMSE" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
