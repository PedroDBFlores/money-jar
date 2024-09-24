'use client';

type LatestContribuitersProps = {
    contribuiters: string[]
};
const LatestContribuiters = ({contribuiters}: LatestContribuitersProps) => {
    return contribuiters.map((c, i)=> <p key={i}>{c}</p>)
};

export { LatestContribuiters }