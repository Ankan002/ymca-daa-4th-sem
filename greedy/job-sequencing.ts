import clc from "cli-color";

interface Job {
    jobName: string;
    deadline: number;
    profit: number;
}

interface JobSequencingResponse {
    sequencedJobs: Array<Job | null>;
    maxProfit: number;
}

const jobSequencing = (jobs: Array<Job>): JobSequencingResponse => {
    jobs.sort((jobOne, jobTwo) => jobTwo.profit - jobOne.profit);

    let maxDeadLine = 0;

    jobs.forEach((job) => {
        if (job.deadline > maxDeadLine) maxDeadLine = job.deadline;
    });

    const workSequence: Array<Job | null> = new Array<Job | null>(
        maxDeadLine
    ).fill(null);

    for (const job of jobs) {
        let currentJobPosition = job.deadline - 1;

        while (
            currentJobPosition >= 0 &&
            workSequence[currentJobPosition] !== null
        )
            currentJobPosition--;

        if (currentJobPosition < 0) continue;

        workSequence[currentJobPosition] = job;
    }

    let totalProfit = 0;

    workSequence.forEach((job) => {
        if (job) totalProfit += job.profit;
    });

    return {
        sequencedJobs: workSequence,
        maxProfit: totalProfit,
    };
};

const jobSequencingResponse = jobSequencing([
    {
        jobName: "A",
        deadline: 2,
        profit: 20,
    },
    {
        jobName: "C",
        deadline: 1,
        profit: 10,
    },
    {
        jobName: "E",
        deadline: 3,
        profit: 1,
    },
    {
        jobName: "D",
        deadline: 3,
        profit: 5,
    },
    {
        jobName: "B",
        deadline: 2,
        profit: 15,
    },
]);

console.table(jobSequencingResponse.sequencedJobs);
console.log(
    clc.greenBright(
        `Max Profit can be earned: ${jobSequencingResponse.maxProfit}`
    )
);

console.log();

const jobSequencingResponseTwo = jobSequencing([
    {
        jobName: "A",
        deadline: 4,
        profit: 20,
    },
    {
        jobName: "B",
        deadline: 1,
        profit: 10,
    },
    {
        jobName: "C",
        deadline: 1,
        profit: 40,
    },
    {
        jobName: "D",
        deadline: 1,
        profit: 30,
    }
]);

console.table(jobSequencingResponseTwo.sequencedJobs);
console.log(
    clc.greenBright(
        `Max Profit can be earned: ${jobSequencingResponseTwo.maxProfit}`
    )
);
