const formatInstructions = (instructions: string) => {
    // Split by "step" followed by a number
    const steps = instructions.split(/(?=step \d+)/i);
    
    // If no steps found, return the whole text
    if (steps.length <= 1) {
      return (
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          {instructions}
        </p>
      );
    }
    
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Instructions
        </h3>
        <div className="space-y-5">
          {steps.map((step, index) => {
            if (!step.trim()) return null;
            
            // Clean up the step text
            const cleanedStep = step.trim().replace(/^step \d+\s*/i, '');
            const stepNumber = index + 1;
            
            return (
              <div key={index} className="relative pl-10 pb-5">
                {/* Step number with decorative line */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-yellow-300/30 dark:bg-fuchsia-600/30 border border-yellow-300/30 dark:border-fuchsia-600/30 flex items-center justify-center">
                  <span className="font-bold text-yellow-700 dark:text-fuchsia-300 text-sm">
                    {stepNumber}
                  </span>
                </div>
                
                {/* Step text */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {cleanedStep}
                </p>
                
                {/* Divider line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="absolute bottom-0 left-4 w-0.5 h-5 bg-gray-300/30 dark:bg-gray-700/60"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  export default formatInstructions;