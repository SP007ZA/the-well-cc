export default function LoadingSpinner({message}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-rose-700 border-t-transparent rounded-full animate-spin"></div>

        {/* Friendly Message */}
        <p className="text-gray-700 text-lg font-medium">{message}</p>
      </div>
    </div>
  );
}
