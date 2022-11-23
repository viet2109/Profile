import React, { useEffect } from 'react'

export default function TextTyping() {
    const textArray = ["Nguyen Duy Vu", "Front End Developer", "Software Engineer"]
    useEffect(() => {
        const typeText = document.querySelector('.typetext')
        let index = 0,
            isAdding = true,
            textToBeTypedIndex = 0

        const typingText = () => {
            setTimeout(
                function () {
                    // set the text of typeText to a substring of the text to be typed using index.
                    typeText.innerText = textArray[textToBeTypedIndex].slice(0, index)
                    if (isAdding) {
                        // adding text
                        if (index > textArray[textToBeTypedIndex].length) {
                            // no more text to add
                            isAdding = false
                            typeText.classList.add('showText')
                            //break: wait 1s before playing again
                            setTimeout(function () {
                                typeText.classList.remove('showText')
                                typingText()
                            }, 900)
                            return
                        } else {
                            // increment index by 1
                            index++
                        }
                    } else {
                        // removing text
                        if (index === 0) {
                            // no more text to remove
                            isAdding = true
                            //switch to next text in text array
                            textToBeTypedIndex = (textToBeTypedIndex + 1) % textArray.length
                        } else {
                            // decrement index by 1
                            index--
                        }
                    }
                    // call itself
                    typingText()
                },
                isAdding ? 120 : 60
            )
        }
        // start animation
        typingText()
    }, [])
    return (
        <h1 className="typing-text text-center text-4xl md:text-5xl leading-10 md:leading-[56px] font-bold px-5 my-10 md:my-5 fade-in duration-500">
            Hi, I am &nbsp;
            <br className="block md:hidden" />
            <span className="text-primary typetext"></span>
            <span className="text-primary inline-block animate-fade">|</span>
        </h1>
    )
}
