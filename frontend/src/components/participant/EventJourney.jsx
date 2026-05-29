import React from 'react';

export default function EventJourney({
  participant
}) {
  const stage =
    participant?.stage?.toLowerCase() ||
    'ideation';

  const stageConfig = {
    ideation: {
      status: 'Ideation',
      progress: 'In Progress',
      evaluator: 'Not Required Yet',
      evaluatorNote:
        'Evaluation begins after development.',
      nextStage:
        'Development Phase',
      nextTime: 'Starts Soon',
      submission: 'Not Open',
    },

    development: {
      status: 'Development',
      progress: 'In Progress',
      evaluator: 'Pending Assignment',
      evaluatorNote:
        'Mentor/evaluator will be assigned before Round 1',
      nextStage:
        'Round 1 Evaluation',
      nextTime: 'Sat 4:00 PM',
      submission: 'Pending',
    },

    evaluation: {
      status: 'Evaluation',
      progress: 'Under Review',
      evaluator:
        'Assigned by Committee',
      evaluatorNote:
        'Your submission is being evaluated.',
      nextStage:
        'Results Announcement',
      nextTime: 'Coming Soon',
      submission: 'Submitted',
    },

    final: {
      status: 'Final Round',
      progress: 'Qualified',
      evaluator:
        'Panel Assigned',
      evaluatorNote:
        'Prepare for final presentation.',
      nextStage:
        'Final Demo',
      nextTime: 'Sun 10:00 AM',
      submission: 'Completed',
    },
  };

  const current =
    stageConfig[stage] ||
    stageConfig.ideation;

  return (
    <div className="bg-[#d6f3f7] rounded-xl p-8 border border-[#c1c8c2]/30 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#012d1d]">
          Your Event Journey
        </h2>

        <p className="text-sm text-[#414844] mt-1">
          Track your current progress
          in the event lifecycle
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        {/* Current Stage */}
        <div className="bg-white rounded-xl p-5 border border-[#c1c8c2]/20 shadow-sm">
          <h3 className="text-sm text-[#717973] mb-2">
            Current Stage
          </h3>

          <p className="text-lg font-bold text-[#012d1d]">
            {current.status}
          </p>

          <span className="inline-flex mt-3 bg-[#dff6ea] text-[#012d1d] text-xs font-semibold px-3 py-1 rounded-full">
            {current.progress}
          </span>
        </div>

        {/* Evaluator */}
        <div className="bg-white rounded-xl p-5 border border-[#c1c8c2]/20 shadow-sm">
          <h3 className="text-sm text-[#717973] mb-2">
            Evaluator
          </h3>

          <p className="text-lg font-bold text-[#012d1d]">
            {current.evaluator}
          </p>

          <p className="text-sm text-[#414844] mt-2">
            {current.evaluatorNote}
          </p>
        </div>

        {/* Upcoming Stage */}
        <div className="bg-white rounded-xl p-5 border border-[#c1c8c2]/20 shadow-sm">
          <h3 className="text-sm text-[#717973] mb-2">
            Upcoming Stage
          </h3>

          <p className="text-lg font-bold text-[#012d1d]">
            {current.nextStage}
          </p>

          <p className="text-sm text-[#414844] mt-2">
            {current.nextTime}
          </p>
        </div>

        {/* Submission */}
        <div className="bg-white rounded-xl p-5 border border-[#c1c8c2]/20 shadow-sm">
          <h3 className="text-sm text-[#717973] mb-2">
            Submission Status
          </h3>

          <p className="text-lg font-bold text-[#012d1d]">
            {current.submission}
          </p>

          <p className="text-sm text-[#414844] mt-2">
            {stage ===
            'development'
              ? 'Submit your project before evaluation'
              : 'Status updates automatically'}
          </p>
        </div>
      </div>
    </div>
  );
}