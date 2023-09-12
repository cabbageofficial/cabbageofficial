"use client"

import { useState } from "react";

//Components
import { Collapse, CollapseButton, CollapseContainer } from "../Common/Collapse";

//Data
const faqData = [
    {
        title: "What is Lorem Ipsum?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        title: "How can I contact customer support?",
        content: "You can reach our customer support team by phone at 1-800-123-4567 or by email at support@example.com. Yes, we have a 30-day return policy. You can return your purchase for a full refund within 30 days of the purchase date."
    },
    {
        title: "Is there a return policy?",
        content: "Yes, we have a 30-day return policy. You can return your purchase for a full refund within 30 days of the purchase date. Yes, we have a 30-day return policy. You can return your purchase for a full refund within 30 days of the purchase date. Yes, we have a 30-day return policy. You can return your purchase for a full refund within 30 days of the purchase date. Yes, we have a 30-day return policy. You can return your purchase for a full refund within 30 days of the purchase date."
    },
    {
        title: "What payment methods do you accept?",
        content: "We accept credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers as payment methods. Yes, we have a 30-day return policy. You can return your purchase for a full refund within 30 days of the purchase date. Yes, we have a 30-day return policy. You can return your purchase for a full refund within 30 days of the purchase date."
    },
    {
        title: "Do you offer international shipping?",
        content: "Yes, we offer international shipping to most countries. Shipping fees may apply depending on your location. Yes, we have a 30-day return policy. You can return your purchase for a full refund within 30 days of the purchase date. Yes, we have a 30-day return policy. You can return your purchase for a full refund within 30 days of the purchase date."
    },
    {
        title: "How do I reset my password?",
        content: "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your email. Yes, we have a 30-day return policy. You can return your purchase for a full refund within 30 days of the purchase date. Yes, we have a 30-day return policy. You can return your purchase for a full refund within 30 days of the purchase date."
    }
];


const Left = () => {
    //State
    const [open, setOpen] = useState<number | null>(null);

    //Handler
    const onOpenHandler = (i: number) => {
        if (open === i) {
            setOpen(null)
        } else {
            setOpen(i)
        }
    }

    return (
        <div>
            {faqData.slice(0, 6).map((item, i) => (
                <CollapseContainer key={i}>
                    <CollapseButton onClick={() => onOpenHandler(i)} open={open === i}>
                        {item.title}
                    </CollapseButton>
                    <Collapse
                        open={open === i}
                    >
                        {item.content}
                    </Collapse>
                </CollapseContainer>
            ))}
        </div>
    );
};

export default Left;