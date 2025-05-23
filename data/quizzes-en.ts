export const quizzesEn = {
    basics: {
        title: "Quiz section 1: Basics of Japanese Candlesticks",
        description: "Learn the basics of Japanese candlestick patterns",
        lessons: {
            intro: {
                title: "Quiz 1: What is Japanese candlestick?",
                uri: require("../assets/images/sections/lesson1.png"),
                content: {
                    question: "What does a Japanese candlestick represent on the chart?",
                    options: [
                        "A. Closing price only",
                        "B. Trend only",
                        "C. All 4 prices: open, close, high and low",
                        "D. Trading volume"
                    ],
                    answer: 2
                },
                nextQuiz: "colors",
                previousQuiz: null,
            },
            colors: {
                title: "Quiz 2: Candlestick color and length",
                uri: require("../assets/images/sections/lesson2.png"),
                content: {
                    question: "What does a long green candle usually indicate?",
                    options: [
                        "A sideways market",
                        "Strong selling pressure",
                        "Buyers are in strong control",
                        "No clear signal"
                    ],
                    answer: 2
                },
                nextQuiz: "psychology",
                previousQuiz: "intro",
            },
            psychology: {
                title: "Quiz 3: Market psychology behind each candle",
                uri: require("../assets/images/sections/lesson3.png"),
                content: {
                    question: "What does a long upper shadow indicate?",
                    options: [
                        "Price is rising sharply",
                        "No fluctuations",
                        "There is strong selling pressure at high prices",
                        "Strong buying"
                    ],
                    answer: 2
                },
                nextQuiz: "single-vs-patterns",
                previousQuiz: "colors",
            },
            "single-vs-patterns": {
                title: "Quiz 4: Single candlesticks and candlestick patterns",
                uri: require("../assets/images/sections/lesson4.png"),
                content: {
                    question: "How many candles are there in a candlestick pattern?",
                    options: [
                        "Always 1 candle",
                        "Always 2 candles",
                        "Always 3 candles",
                        "Can be from 1 to many candles"
                    ],
                    answer: 3
                },
                nextQuiz: null,
                previousQuiz: "psychology",
            },
        },
        nextSection: "reversals",
    },
    reversals: {
        title: "Quiz section 2: Reversal candlestick patterns",
        description: "Recognizing candlestick patterns that signal a possible trend reversal",
        lessons: {
            hammer: {
                title: "Quiz 5: Hammer & Inverted Hammer Candlestick",
                uri: require("../assets/images/sections/lesson5.png"),
                content: {
                    question: "Which trend should Hammer Candlestick appear in to have the highest effect?",
                    answer: 2,
                    options: [
                        "Uptrend",
                        "Sideways market",
                        "Downtrend",
                        "Independent of trend"
                    ]
                },
                nextQuiz: "shooting-star",
                previousQuiz: null,
            },
            "shooting-star": {
                title: "Quiz 6: Shooting Star & Hanged Man",
                uri: require("../assets/images/sections/lesson6.png"),
                content: {
                    question: "What are the characteristics of Shooting Star candlesticks?",
                    answer: 2,
                    options: [
                        "Long lower shadow",
                        "Long candle body",
                        "Long upper shadow, small body, located near the bottom of the candle",
                        "Big body and no shadow"
                    ]
                },
                nextQuiz: "engulfing",
                previousQuiz: "hammer",
            },
            engulfing: {
                title: "Quiz 7: Bullish Engulfing & Bearish Engulfing",
                uri: require("../assets/images/sections/lesson7.png"),
                content: {
                    question: "In a Bullish Engulfing pattern, what happens?",
                    answer: 1,
                    options: [
                        "Longer bearish candle",
                        "Bullish candle completely engulfs the previous bearish candle",
                        "Smaller candle than the previous candle",
                        "No engulfing"
                    ]
                },
                nextQuiz: "morning-star",
                previousQuiz: "shooting-star",
            },
            "morning-star": {
                title: "Quiz 8: Morning Star & Evening Star",
                uri: require("../assets/images/sections/lesson8.png"),
                content: {
                    question: "What does the Morning Star pattern signal?",
                    answer: 3,
                    options: [
                        "Continuation of a downtrend",
                        "Reversal from up to down",
                        "Sideways market",
                        "Reversal from down to up"
                    ]
                },
                nextQuiz: null,
                previousQuiz: "engulfing",
            },
        },
        nextSection: "continuation",
    },
    continuation: {
        title: "Quiz section 3: Continuation Candlestick Pattern",
        description: "Recognizing candlestick patterns that signal the current trend is likely to continue",
        lessons: {
            "rising-three-methods": {
                title: "Quiz 9: Three Bullish & Three Bearish Candlesticks",
                uri: require("../assets/images/sections/lesson9.png"),
                content: {
                    question: "What does the Rising Three Methods Pattern indicate?",
                    answer: 2,
                    options: [
                        "Reversal from up to down",
                        "Pause then continue to fall",
                        "Pause in uptrend then continue to rise",
                        "Unclear market trend"
                    ]
                },
                nextQuiz: "doji",
                previousQuiz: null,
            },
            doji: {
                title: "Quiz 10: Doji and variations",
                uri: require("../assets/images/sections/lesson10.png"),
                content: {
                    question: "What does a Doji candle usually indicate?",
                    answer: 2,
                    options: [
                        "Buyers dominate",
                        "Sellers dominate",
                        "Indecision between buyers and sellers",
                        "No market meaning"
                    ]
                },
                nextQuiz: "spinning-top",
                previousQuiz: "rising-three-methods",
            },
            "spinning-top": {
                title: "Quiz 11: Spinning & Marubozu",
                uri: require("../assets/images/sections/lesson11.png"),
                content: {
                    question: "What does a Marubozu candle usually indicate?",
                    answer: 2,
                    options: [
                        "No clear market force",
                        "The market is moving sideways",
                        "Strong momentum towards the close",
                        "Sign of a slight reversal"
                    ]
                },
                nextQuiz: null,
                previousQuiz: "doji",
            },
        },
        nextSection: "reversalChart",
    },
    reversalChart: {
        title: "Quiz section 4: Reversal Chart Patterns",
        description: "Recognizing chart patterns that signal a possible trend reversal",
        lessons: {
            doubleTopBottom: {
                title: "Quiz 12: Double Top & Double Bottom",
                uri: require("../assets/images/sections/lesson12.png"),
                content: {
                    question: "What does the Double Top pattern usually signal?",
                    answer: 3,
                    options: [
                        "Continuation of an uptrend",
                        "Sideways market",
                        "Reversal from down to up",
                        "Reversal from up to down"
                    ]
                },
                nextQuiz: "headAndShoulders",
                previousQuiz: null,
            },
            headAndShoulders: {
                title: "Quiz 13: Head and Shoulders & Inverse Head and Shoulders",
                uri: require("../assets/images/sections/lesson13.png"),
                content: {
                    question: "Inverse Head and Shoulders pattern What is the signal?",
                    answer: 2,
                    options: [
                        "Continued downtrend",
                        "Sideways market",
                        "Reversal from down to up",
                        "Up then down"
                    ]
                },
                nextQuiz: "roundingTopBottom",
                previousQuiz: "doubleTopBottom",
            },
            roundingTopBottom: {
                title: "Quiz 14: Rounded Top & Rounded Bottom",
                uri: require("../assets/images/sections/lesson14.png"),
                content: {
                    question: "What does the Rounding Bottom pattern signal?",
                    answer: 2,
                    options: [
                        "Reversal from up to down",
                        "Continued downtrend",
                        "Reversal from down to up",
                        "No clear signal"
                    ]
                },
                nextQuiz: "bumpAndRun",
                previousQuiz: "headAndShoulders",
            },
            bumpAndRun: {
                title: "Quiz 15: Bump and Run Reversal Pattern",
                uri: require("../assets/images/sections/lesson15.png"),
                content: {
                    question: "After which period does the Bump and Run pattern usually appear?",
                    answer: 1,
                    options: [
                        "Slight fluctuations",
                        "Strong and steep increase or decrease",
                        "Sideways market",
                        "Accumulation phase"
                    ]
                },
                nextQuiz: null,
                previousQuiz: "roundingTopBottom",
            },
        },
        nextSection: "continuationChart",
    },
    continuationChart: {
        title: "Quiz section 5: Continuation Chart Pattern",
        description: "Price patterns that signal the current trend will continue after a period of accumulation or correction",
        lessons: {
            flag: {
                title: "Quiz 16: Flags and Pennants",
                uri: require("../assets/images/sections/lesson16.png"),
                content: {
                    question: "What is a Flag pattern?",
                    answer: 2,
                    options: [
                        "Reversal",
                        "No signal",
                        "Continuation after a strong trend",
                        "Long-term accumulation phase"
                    ]
                },
                nextQuiz: "ascending-descending-triangle",
                previousQuiz: null,
            },
            "ascending-descending-triangle": {
                title: "Quiz 17: Ascending Triangle and Descending Triangle",
                uri: require("../assets/images/sections/lesson17.png"),
                content: {
                    question: "In which direction does an Ascending Triangle usually break out?",
                    answer: 2,
                    options: [
                        "Downwardg",
                        "Unknown",
                        "Upward (bullish)",
                        "Sideways"
                    ]
                },
                nextQuiz: "symmetrical-triangle",
                previousQuiz: "flag",
            },
            "symmetrical-triangle": {
                title: "Quiz 18: Isosceles Triangle",
                uri: require("../assets/images/sections/lesson18.png"),
                content: {
                    question: "What signal does a Symmetrical Triangle give?",
                    answer: 3,
                    options: [
                        "Always reversing",
                        "Always continuing",
                        "No signal",
                        "Can continue or reverse depending on the direction of the breakout"
                    ]
                },
                nextQuiz: "rectangle-pattern",
                previousQuiz: "ascending-descending-triangle",
            },
            "rectangle-pattern": {
                title: "Quiz 19: Patterns rectangle",
                uri: require("../assets/images/sections/lesson19.png"),
                content: {
                    question: "What does the Rectangle Pattern represent?",
                    answer: 2,
                    options: [
                        "Strong market",
                        "High volatility",
                        "Price accumulation/struggle phase",
                        "Clear reversal"
                    ]
                },
                nextQuiz: null,
                previousQuiz: "symmetrical-triangle",
            },
        },
        nextSection: null,
    },
};