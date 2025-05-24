export const lessonsEn = {
    basics: {
        title: "Part 1: Basics of Japanese Candlesticks",
        description: "Learn the basics of Japanese candlestick patterns",
        backgroundImg: require("../assets/images/background/section1.png"),
        lessons: {
            intro: {
                title: "Lesson 1: What is Japanese Candlestick?",
                uri: require("../assets/images/sections/lesson1.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "Japanese candlesticks represent price movements over a specific period of time, including four price levels: Open, High, Low, and Close (OHLC).",
                    },
                    {
                        type: "text",
                        value:
                            "Candlestick charts originated in Japan over 300 years ago and are now a popular tool in modern technical analysis.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745478529/1_kzwxpe.jpg",
                        alt: "Basic candle structure with OHLC price levels",
                    },
                    {
                        type: "text",
                        value:
                            "Each candle provides insight into market sentiment over the selected time frame.",
                    },
                ],
                nextLesson: "colors",
                previousLesson: null,
            },
            colors: {
                title: "Lesson 2: Candle Colors and Lengths",
                uri: require("../assets/images/sections/lesson2.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "A bullish candle (usually green or white) represents a closing price that is higher than the opening price. A bearish candle (usually red or black) represents a closing price that is lower than the opening price door.",
                    },
                    {
                        type: "text",
                        value:
                            "The candle body shows the range between the open and close prices. Long bodies show strong momentum; short bodies show hesitation or weak movement.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745478822/1_jsmbut.jpg",
                        alt: "Comparing bullish and bearish candles",
                    },
                    {
                        type: "text",
                        value:
                            "The candle shadow (wick) shows the highest and lowest prices reached. Long shadows often show price rejection or market testing.",
                    },
                ],
                nextLesson: "psychology",
                previousLesson: "intro",
            },
            psychology: {
                title: "Lesson 3: Market Psychology Behind Each Candle",
                uri: require("../assets/images/sections/lesson3.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "Candlesticks reflect the psychological battle between buyers and sellers. For example, a strong bullish candle shows that buyers are in control of the market.",
                    },
                    {
                        type: "text",
                        value:
                            "A doji candle shows indecision, where neither side has a clear advantage. Long shadows can be a sign of price rejection or a failed breakout.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745479938/1_pzmw0c.jpg",
                        alt: "The Psychology Behind Candlestick Patterns",
                    },
                ],
                nextLesson: "single-vs-patterns",
                previousLesson: "colors",
            },
            "single-vs-patterns": {
                title: "Lesson 4: Single Candles and Candlestick Patterns",
                uri: require("../assets/images/sections/lesson4.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "A single candle can carry a certain message, but the combination of two or more candles often creates a pattern with stronger predictive meaning.",
                    },
                    {
                        type: "text",
                        value:
                            "For example, a Hammer is a single candle that can reverse to the upside. An Engulfing pattern combines two candles and often represents a strong change in momentum.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745480576/nen-hammer-1_eok9r7.jpg",
                        alt: "Comparison between single candlestick and multi-candlestick patterns",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745480575/image_wqfhaa.png",
                        alt: "Comparison between single candlestick and multi-candlestick patterns",
                    },
                    {
                        type: "text",
                        value:
                            "Context is important — patterns are more reliable when they appear near support/resistance zones or after a strong trend.",
                    },
                ],
                nextLesson: null,
                previousLesson: "psychology",
            },
        },
        nextSection: "reversals",
        previousSection: null,
    },
    reversals: {
        title: "Part 2: Reversal candlestick patterns",
        description: "Recognizing candlestick patterns that signal a possible trend reversal",
        backgroundImg: require("../assets/images/background/section2.png"),
        lessons: {
            hammer: {
                title: "Lesson 5: Hammer Candlestick & Inverted Hammer Candlestick",
                uri: require("../assets/images/sections/lesson5.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "The Hammer Candlestick is a single candlestick pattern that appears after a downtrend, signaling a possible bullish reversal.",
                    },
                    {
                        type: "text",
                        value:
                            "Characteristics: small body, long lower shadow (at least twice as long as the body), almost no upper shadow.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745483629/mau-nen-hammer_aornjo.png",
                        alt: "Illustration of Hammer Candlestick",
                    },
                    {
                        type: "text",
                        value:
                            "The Inverted Hammer candlestick has a similar shape but with a long upper shadow. It also appears after a downtrend and is a weak bullish signal.",
                    },
                ],
                nextLesson: "shooting-star",
                previousLesson: null,
            },
            "shooting-star": {
                title: "Lesson 6: Shooting Star & Hanging Man Candlesticks",
                uri: require("../assets/images/sections/lesson6.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "The Shooting Star candlestick is a bearish candlestick pattern that appears after an uptrend. Characteristics: small body, long upper shadow, short or no lower shadow.",
                    },
                    {
                        type: "text",
                        value:
                            "The long upper shadow shows strong rejection of the price, signaling a possible bearish reversal.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745484172/Nen-Shooting-Star_gcq2eu.png",
                        alt: "Illustration of Shooting Star Candlestick",
                    },
                    {
                        type: "text",
                        value:
                            "The Hanging Man candlestick is the opposite: it appears after an uptrend, has a long lower shadow like a Hammer candlestick but carries a bearish signal.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745484171/Nen-Nguoi-Treo-Co_ggjzpo.png",
                        alt: "Illustration of Hanging Man Candlestick",
                    },
                ],
                nextLesson: "engulfing",
                previousLesson: "hammer",
            },
            engulfing: {
                title: "Lesson 7: Bullish & Bearish Engulfing Candles",
                uri: require("../assets/images/sections/lesson7.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "The Engulfing pattern is a two-candle pattern that shows a clear reversal when the second candle 'swallows' the first candle.",
                    },
                    {
                        type: "text",
                        value:
                            "Bullish Engulfing: appears after a downtrend, the large bullish candle completely engulfs the previous bearish candle → a bullish reversal signal.",
                    },
                    {
                        type: "text",
                        value:
                            "Bearish Engulfing: on the contrary, appears after an uptrend, signaling a bearish reversal.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745484980/unnamed_hd5qno.png",
                        alt: "Illustration of Bullish and Bearish Engulfing Patterns",
                    },
                ],
                nextLesson: "morning-star",
                previousLesson: "shooting-star",
            },
            "morning-star": {
                title: "Lesson 8: Morning Star & Evening Star",
                uri: require("../assets/images/sections/lesson8.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "Morning Star is a three-candle pattern that appears after a downtrend, signaling a bullish reversal.",
                    },
                    {
                        type: "text",
                        value:
                            "Structure: strong bearish candle → small candle (doji/spinning top) → strong bullish candle. Shows a change transfer control from the seller to the buyer.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745485849/nen-morningstar-01_dzr52b.png",
                        alt: "Illustration of Morning Star and Evening Star",
                    },
                    {
                        type: "text",
                        value:
                            "Evening Star is a bearish reversal pattern, with a similar structure but in reverse and appearing after an uptrend.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745485849/nen-evening-star-01_npxazn.jpg",
                        alt: "Illustration of Morning Star Star) and Evening Star",
                    },
                ],
                nextLesson: null,
                previousLesson: "engulfing",
            },
        },
        nextSection: "continuation",
        previousSection: "basics",
    },
    continuation: {
        title: "Part 3: Continuation Candlestick Patterns",
        description: "Recognizing candlestick patterns that signal the current trendlikely to continue",
        backgroundImg: require("../assets/images/background/section3.png"),
        lessons: {
            "rising-three-methods": {
                title: "Lesson 9: Three Consecutive Rising Candles & Three Consecutive Falling Candles",
                uri: require("../assets/images/sections/lesson9.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "The Rising Three Methods pattern is a bullish continuation candlestick pattern that appears in an uptrend, indicating that the trend is likely to continue.",
                    },
                    {
                        type: "text",
                        value:
                            "Structure: One long bullish candle → three consecutive small bearish candles (within the range of the first bullish candle) → another long bullish candle confirms the trend.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745544899/Rising-Three-Methods-large_eeziun.png",
                        alt: "Rising Three Methods",
                    },
                    {
                        type: "text",
                        value:
                            "The Falling Three Methods pattern is the opposite pattern, appearing in a downtrend, signaling that the downtrend will continue. Structure: long bearish candle → three small bullish candles → long bearish confirmation candle.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745544974/Falling-Three-methods_l9tup4.png",
                        alt: "Illustration of Three Consecutive Bearish Candles (Falling Three Methods)",
                    },
                ],
                nextLesson: "doji",
                previousLesson: null,
            },
            doji: {
                title: "Lesson 10: Doji Candles and Variations",
                uri: require("../assets/images/sections/lesson10.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "Doji Candles are a pattern that shows market indecision, when the opening and closing prices are almost equal. In a continuing trend, Doji can signal a pause before continuing the trend.",
                    },
                    {
                        type: "text",
                        value:
                            "Dragonfly Doji (Doji Chuân Chuân): Has a long lower shadow, almost no upper shadow, appears in a downtrend, signaling the possibility of continuation or reversal depending on the context.",
                    },
                    {
                        type: "text",
                        value:
                            "Gravestone Doji (Doji Bia Grave): Opposite to Doji Chuân Chuân, has a long upper shadow, appears in an uptrend, signaling strong selling pressure.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745545121/7-dragonfly-doji1_on6f9g.jpg",
                        alt: "Illustration of Doji variations",
                    },
                    {
                        type: "text",
                        value:
                            "Long-legged Doji: Has both a long upper and lower shadow, indicating strong market indecision, often appearing before a trend continues or reverses.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745545219/unnamed_g86o9p.jpg",
                        alt: "Illustration of Doji variations",
                    },
                ],
                nextLesson: "spinning-top",
                previousLesson: "rising-three-methods",
            },
            "spinning-top": {
                title: "Lesson 11: Spinning Top & Marubozu Candlesticks",
                uri: require("../assets/images/sections/lesson11.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "A Spinning Top candlestick is a candlestick with a small body and nearly equal upper and lower shadows, representing a balance between buyers and sellers. In an ongoing trend, it shows that the market is taking a break before continuing.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745545534/Spinning-Top-Candlestick_pcdxyy.jpg",
                        alt: "Illustration of Spinning Top and Marubozu",
                    },
                    {
                        type: "text",
                        value:
                            "Marubozu is a candlestick with a long body and almost no upper or lower shadow, representing the absolute strength of the trend. A bullish Marubozu (white body) appears in an uptrend, while a bearish Marubozu (black body) appears in a downtrend, both of which signal a strong trend continuation.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745545357/Diagram-of-marubozu-candles_haeyfv.webp",
                        alt: "Illustration of Marubozu and Spinning Top Candlestick",
                    },
                ],
                nextLesson: null,
                previousLesson: "doji",
            },
        },
        nextSection: "reversalChart",
        previousSection: "reversals",
    },
    reversalChart: {
        title: "Part 4: Reversal Chart Patterns",
        description: "Recognizing chart patterns that signal a possible trend reversal",
        backgroundImg: require("../assets/images/background/section4.png"),
        lessons: {
            doubleTopBottom: {
                title: "Lesson 12: Double Top & Double Bottom Pattern",
                uri: require("../assets/images/sections/lesson12.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "Double Top is a bearish reversal pattern that appears after an uptrend. It has two nearly equal price peaks, signaling an upcoming downtrend.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546060/Double-top-chart-pattern_a1dktt.png",
                        alt: "Double Top and Double Bottom Illustration",
                    },
                    {
                        type: "text",
                        value:
                            "Double Bottom is a bullish reversal pattern that appears after a downtrend, has two nearly equal price bottoms, signaling an upcoming uptrend.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546060/double-bottom-technical-pattern_istlyz.png",
                        alt: "Double Top and Double Bottom Illustration",
                    },
                    {
                        type: "text",
                        value:
                            "Characteristics: Two tops/bottoms separated by a price zone called the 'neckline'. The neckline breakout confirms the pattern.",
                    },
                ],
                nextLesson: "headAndShoulders",
                previousLesson: null,
            },
            headAndShoulders: {
                title: "Lesson 13: Head and Shoulders Pattern & Inverse Head and Shoulders",
                uri: require("../assets/images/sections/lesson13.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "The Head and Shoulders pattern is a bearish reversal pattern that appears after an uptrend, consisting of three peaks: two lower shoulders and a higher head.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546381/US100_2024-07-26_11-48-54_sjvsez.webp",
                        alt: "Head and Shoulders and Inverse Head and Shoulders Illustration",
                    },
                    {
                        type: "text",
                        value:
                            "The Inverse Head and Shoulders pattern is a bullish reversal pattern that appears after a downtrend, with the opposite structure of three bottoms: two shoulders and a head.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546485/94_odiwfo.png",
                        alt: "Head and Shoulders and Inverse Head and Shoulders Illustration",
                    },
                    {
                        type: "text",
                        value:
                            "The neckline connects bottoms (in Head and Shoulders) or tops (in Inverted Head and Shoulders) are the confirmation levels when the price breaks out.",
                    },
                ],
                nextLesson: "roundingTopBottom",
                previousLesson: "doubleTopBottom",
            },
            roundingTopBottom: {
                title: "Lesson 14: Curved Top & Curved Bottom Patterns",
                uri: require("../assets/images/sections/lesson14.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "The Curved Top pattern is a bearish reversal pattern, appearing after an uptrend, with a curved top shape like an inverted 'U', signaling a downtrend.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546742/rounding-top-chart_mf03qo.png",
                        alt: "Illustration of Rounding Top and Rounding Bottom",
                    },
                    {
                        type: "text",
                        value:
                            "The Rounding Bottom pattern is a bullish reversal pattern that appears after a downtrend, with a curved bottom like the letter 'U', signaling an uptrend.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546759/HfgBQlejuQAI66c0P7_H9UxT_20231108023702702_en0l4a.webp",
                        alt: "Illustration of Rounding Top and Rounding Bottom",
                    },
                    {
                        type: "text",
                        value:
                            "This pattern usually forms over a long period of time, representing a gradual transition from an old trend to a new trend.",
                    },
                ],
                nextLesson: "bumpAndRun",
                previousLesson: "headAndShoulders",
            },
            bumpAndRun: {
                title: "Lesson 15: Bump and Run Pattern",
                uri: require("../assets/images/sections/lesson15.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "Bump and Run Reversal (BARR) is a reversal pattern that appears after a strong uptrend or downtrend, signaling an impending reversal.",
                    },
                    {
                        type: "text",
                        value:
                            "Structure: 'Lead-in' (Preparation) phase, 'Bump' (Bump - abnormally strong price increase/decrease), and 'Reversal' (Run – price reverses after breaking the trend line).",
                    },
                    {
                        type: "text",
                        value:
                            "The bullish BARR pattern appears after a downtrend, the bearish BARR appears after an uptrend. The broken trend line is a confirmation signal.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546991/bump-and-run-1024x480-3_papayf.webp",
                        alt: "Bump and Run Pattern Illustration",
                    },
                ],
                nextLesson: null,
                previousLesson: "roundingTopBottom",
            },
        },
        nextSection: "continuationChart",
        previousSection: "continuation",
    },
    continuationChart: {
        title: "Part 5: Continuation Chart Patterns",
        description: "Price patterns that signal the continuation of the current trend after a period of accumulation or correction",
        backgroundImg: require("../assets/images/background/section5.png"),
        lessons: {
            flag: {
                title: "Lesson 16: Flags & Tail Flags nhe",
                uri: require("../assets/images/sections/lesson16.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "Flags and Pennants are two common continuation patterns after a strong trend.",
                    },
                    {
                        type: "text",
                        value:
                            "Flags are tilted rectangles, representing a short accumulation period, often tilted in the opposite direction of the main trend.",
                    },
                    {
                        type: "text",
                        value:
                            "Pennants are small triangles, formed by price fluctuations within a narrow range.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745547366/pennant-and-flag-patterns-2-1_vs1udo.png",
                        alt: "Flag and Pennant Pattern Illustration",
                    },
                    {
                        type: "text",
                        value:
                            "A breakout from the pattern with high volume is often a signal of trend continuation.",
                    },
                ],
                nextLesson: "ascending-descending-triangle",
                previousLesson: null,
            },
            "ascending-descending-triangle": {
                title: "Lesson 17: Ascending Triangle & Descending Triangle",
                uri: require("../assets/images/sections/lesson17.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "Ascending Triangle is a pattern that continues an uptrend. It is characterized by a horizontal top and a rising bottom.",
                    },
                    {
                        type: "text",
                        value:
                            "Descending Triangle is the opposite, with a horizontal bottom and a falling top, often signaling a continuation downtrend.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745547473/950162_df4e0a7afecb4a41be70f60bf9d4a2e5_mv2_tb19on.jpg",
                        alt: "Illustration of Rising Triangle and Falling Triangle",
                    },
                    {
                        type: "text",
                        value:
                            "Volume usually decreases during the formation of the triangle and increases sharply when the breakout occurs.",
                    },
                ],
                nextLesson: "symmetrical-triangle",
                previousLesson: "flag",
            },
            "symmetrical-triangle": {
                title: "Lesson 18: Symmetrical Triangle",
                uri: require("../assets/images/sections/lesson18.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "A Symmetrical Triangle is a neutral continuation pattern that forms when prices narrow with lower highs and higher lows.",
                    },
                    {
                        type: "text",
                        value:
                            "The pattern reflects the tug-of-war between buyers and sellers. When prices break out of the triangle, the new trend usually continues in that direction.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745547788/Triangles_AShortStudyinContinuationPatterns3_2-6eb5b82169aa45859c5696835f97244f-0886dbfef93d40d7a20a67836e32226e_buhidj.png",
                        alt: "Illustration of Symmetrical Triangle Pattern",
                    },
                    {
                        type: "text",
                        value:
                            "Suitable for both uptrends and downtrends, however, volume should be observed to confirm the reliability of the breakout.",
                    },
                ],
                nextLesson: "rectangle-pattern",
                previousLesson: "ascending-descending-triangle",
            },
            "rectangle-pattern": {
                title: "Lesson 19: Rectangle Pattern",
                uri: require("../assets/images/sections/lesson19.png"),
                content: [
                    {
                        type: "text",
                        value:
                            "The Rectangle pattern appears when the price fluctuates in a horizontal zone between two clear support and resistance levels.",
                    },
                    {
                        type: "text",
                        value:
                            "This is a period of accumulation or rest before the price continues following the previous main trend.",
                    },
                    {
                        type: "image",
                        src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745547893/How-to-Trade-Rectangle-Top-Pattern_ihuqej.webp",
                        alt: "Illustration of the Rectangle Top Patternh rectangle",
                    },
                    {
                        type: "text",
                        value:
                            "When the price breaks out of this zone with high volume, it can be considered a signal of continuation of the previous trend.",
                    },
                ],
                nextLesson: null,
                previousLesson: "symmetrical-triangle",
            },
        },
        nextSection: null,
        previousSection: "reversalChart",
    },
};