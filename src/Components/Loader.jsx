import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 flex flex-col items-center">
        <Loader2 className="animate-spin text-blue-500 mb-4" size={48} />
        <p className="text-gray-700 font-semibold text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;