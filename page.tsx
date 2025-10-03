import { ChatContainer } from '@/components/chat/ChatContainer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Electrical Equipment Health Monitor
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              AI-powered real-time monitoring and fault diagnosis for motors, transformers, and MCC panels
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Real-time Monitoring
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                AI Diagnosis
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                Predictive Maintenance
              </span>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <ChatContainer />
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Powered by AI • Real-time sensor data • Professional electrical diagnostics
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}