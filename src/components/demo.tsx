import React from "react";
import { FullScreenScrollFX, type FullScreenFXAPI } from "./ui/full-screen-scroll-fx";

const sections = [
    {
        leftLabel: "home",
        title: <>hello</>,
        rightLabel: "home",
        background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    },
    {
        leftLabel: "skills",
        title: <>hello</>,
        rightLabel: "skills",
        background: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80",
    },
    {
        leftLabel: "experiences &",
        title: <>hello</>,
        rightLabel: "& achievements",
        background: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80",
    },
    {
        leftLabel: "contact",
        title: <>hello</>,
        rightLabel: "contact",
        background: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
    },
];

export default function DemoOne() {
    // const apiRef = React.useRef<FullScreenFXAPI>(null);

    return (
        <>
            <FullScreenScrollFX
                sections={sections}
                header={
                    <>
                        <div>The Creative</div>
                        <div>Process</div>
                    </>
                }
                footer={<div></div>}
                showProgress
                durations={{ change: 0.7, snap: 800 }}
            />
        </>
    );
}
