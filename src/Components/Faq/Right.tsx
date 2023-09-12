"use client"

import { useState } from "react";

//Components
import { Collapse, CollapseButton, CollapseContainer } from "../Common/Collapse";

//Data
const faqData = [
    {
        title: "What is your privacy policy?",
        content: "Our privacy policy outlines how we collect, use, and protect your personal information. You can read it on our website."
    },
    {
        title: "Are there any discounts available?",
        content: "We frequently offer discounts and promotions. Keep an eye on our website and subscribe to our newsletter for updates."
    },
    {
        title: "Can I track my order?",
        content: "Yes, you can track your order by logging into your account and navigating to the 'Order History' section."
    },
    {
        title: "What is your return address?",
        content: "Our return address is 123 Main Street, Anytown, USA. Please include your order number when returning items."
    },
    {
        title: "Do you have a mobile app?",
        content: "Yes, we have a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play."
    },
    {
        title: "How do I subscribe to your newsletter?",
        content: "You can subscribe to our newsletter by visiting our website and entering your email address in the newsletter signup form."
    }
]


const Right = () => {
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
                    <CollapseButton onClick={() => onOpenHandler(i)}>
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

export default Right;