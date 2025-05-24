// components/StepProcess.tsx

// Define the type for each step
type Step = {
  title: string;
  description: string;
};

// Define the props type for StepProcess
type StepProcessProps = {
  steps: Step[];
};

const StepProcess: React.FC<StepProcessProps> = ({ steps }) => {
  return (
    <div className="mt-12">
        <ol className="relative ml-6">
            {steps.map((step, index) => (
            <li
                key={index}
                className={`relative flex items-start ${index !== steps.length - 1 ? 'border-l-2 pb-10 border-atomicTangerine' : 'left-[2px]'} pl-6`}
            >
                {/* Circle (Ball) */}
                <span className="absolute -left-[13px] top-0 bg-powderBlue rounded-full w-6 h-6"></span>

                {/* Text and Description */}
                <div className='ml-6 transform -translate-y-1.5 flex flex-col justify-start items-start gap-2'>
                    <h4 className="text-start text-charcoal">{step.title}</h4>
                    <p className="text-start text-gray-600">{step.description}</p>
                </div>
            </li>
            ))}
        </ol>
    </div>


  );
};

export default StepProcess;
