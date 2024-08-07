"use client";

import dynamic from "next/dynamic";
import { leftSideContent, rightSideContent, titles } from "./data";
import { options } from "./options";
import React from 'react';

const Chrono = dynamic(() => import('react-chrono').then(mod => mod.Chrono), {
    ssr: false 
});

interface CardProps {
    title: string;
    subtitle: string;
    content: string;
}

function isCardComponent(element: React.ReactNode): element is React.ReactElement<CardProps> {
    return React.isValidElement(element) && 
           'title' in element.props && 
           'subtitle' in element.props && 
           'content' in element.props;
}

export default function TimelineWrapper({ isMobile }: { isMobile: boolean }) {
    const mobileItems = React.useMemo(() => {
        return titles.map((title, index) => {
            const leftContent = leftSideContent[index];
            const rightContent = rightSideContent[index];
            
            let cardContent;
            if (isCardComponent(leftContent)) {
                cardContent = leftContent;
            } else if (isCardComponent(rightContent)) {
                cardContent = rightContent;
            }

            if (cardContent) {
                return {
                    title: `${title.left.title} ${title.right.title}`,
                    cardTitle: cardContent.props.title,
                    cardSubtitle: cardContent.props.subtitle,
                    cardDetailedText: cardContent.props.content
                };
            }
            return null;
        }).filter(Boolean);
    }, []);

    if (isMobile) {
        return (
            <div className="flex flex-col w-full items-center justify-center p-4">
                <Chrono
                    items={mobileItems}
                    mode="VERTICAL"
                    theme={{
                        ...options,
                        cardBgColor: 'transparent',
                        cardForeColor: 'white',
                        titleColor: 'white',
                        titleColorActive: 'white',
                    }}
                    disableClickOnCircle
                    disableToolbar={true}
                    cardWidth={300}
                    cardHeight={400}
                    lineWidth={3}
                    itemWidth={150}
                    scrollable={{ scrollbar: true }}
                    enableOutline={false}
                >
                    {mobileItems.map((item, index) => (
                        <div key={index} className="p-4 mb-8 text-white">
                            <p className="text-sm">{item?.cardDetailedText}</p>
                        </div>
                    ))}
                </Chrono>
            </div>
        );
    }

    return (
        <div className="flex flex-row w-full items-center justify-center p-4">
            <Chrono
                items={titles.map(section => section.left)}
                mode="VERTICAL"
                theme={options}
                disableClickOnCircle
                disableToolbar={true}
                flipLayout 
                cardWidth={500}
                cardHeight={275}
            >
                {leftSideContent}
            </Chrono>
            <Chrono
                items={titles.map(section => section.right)}
                mode="VERTICAL"
                theme={options}
                disableClickOnCircle
                disableToolbar={true}
                cardWidth={500}
                cardHeight={275}
            >
                {rightSideContent}
            </Chrono>
        </div>
    );
}