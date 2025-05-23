export const quizzes = {
  basics: {
    title: "Trắc nghiệm phần 1: Cơ bản về Nến Nhật",
    description: "Tìm hiểu những kiến thức nền tảng về mô hình nến Nhật",
    lessons: {
      intro: {
        title: "Trắc nghiệm bài 1: Nến Nhật là gì?",
        uri: require("../assets/images/sections/lesson1.png"),
        content: {
          question: "Nến Nhật biểu diễn điều gì trên biểu đồ?",
          options: [
            "A. Chỉ giá đóng cửa",
            "B. Chỉ xu hướng",
            "C. Cả 4 mức giá: mở, đóng, cao và thấp",
            "D. Khối lượng giao dịch"
          ],
          answer: 2
        },
        nextQuiz: "colors",
        previousQuiz: null,
      },
      colors: {
        title: "Trắc nghiệm bài 2: Màu sắc và độ dài nến",
        uri: require("../assets/images/sections/lesson2.png"),
        content: {
          question: "Nến xanh dài thường biểu thị điều gì?",
          options: [
            "Thị trường đi ngang",
            "Áp lực bán mạnh",
            "Bên mua đang kiểm soát mạnh mẽ",
            "Không có tín hiệu rõ ràng"
          ],
          answer: 2
        },
        nextQuiz: "psychology",
        previousQuiz: "intro",
      },
      psychology: {
        title: "Trắc nghiệm bài 3: Tâm lý thị trường sau mỗi cây nến",
        uri: require("../assets/images/sections/lesson3.png"),
        content: {
          question: "Bóng nến dài ở phía trên cho thấy điều gì?",
          options: [
            "Giá đang tăng mạnh",
            "Không có biến động",
            "Có áp lực bán mạnh tại vùng giá cao",
            "Mua vào mạnh mẽ"
          ],
          answer: 2
        },
        nextQuiz: "single-vs-patterns",
        previousQuiz: "colors",
      },
      "single-vs-patterns": {
        title: "Trắc nghiệm bài 4: Nến đơn và mô hình nến",
        uri: require("../assets/images/sections/lesson4.png"),
        content: {
          question: "Mô hình nến được tạo từ bao nhiêu cây nến?",
          options: [
            "Luôn là 1 nến",
            "Luôn là 2 nến",
            "Luôn là 3 nến",
            "Có thể từ 1 đến nhiều cây nến"
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
    title: "Trắc nghiệm phần 2: Mô hình nến đảo chiều",
    description: "Nhận biết các mô hình nến báo hiệu khả năng đảo chiều xu hướng",
    lessons: {
      hammer: {
        title: "Trắc nghiệm bài 5: Nến Búa & Búa ngược",
        uri: require("../assets/images/sections/lesson5.png"),
        content: {
          question: "Nến Búa (Hammer) xuất hiện trong xu hướng nào để có hiệu lực cao nhất?",
          answer: 2,
          options: [
            "Xu hướng tăng",
            "Thị trường đi ngang",
            "Xu hướng giảm",
            "Không phụ thuộc xu hướng"
          ]
        },
        nextQuiz: "shooting-star",
        previousQuiz: null,
      },
      "shooting-star": {
        title: "Trắc nghiệm bài 6: Sao băng & Người treo cổ",
        uri: require("../assets/images/sections/lesson6.png"),
        content: {
          question: "Điểm đặc trưng của nến Sao băng (Shooting Star) là gì?",
          answer: 2,
          options: [
            "Bóng dưới dài",
            "Thân nến dài",
            "Bóng trên dài, thân nhỏ, nằm gần đáy nến",
            "Thân lớn và không có bóng"
          ]
        },
        nextQuiz: "engulfing",
        previousQuiz: "hammer",
      },
      engulfing: {
        title: "Trắc nghiệm bài 7: Nhấn chìm tăng & Nhấn chìm giảm",
        uri: require("../assets/images/sections/lesson7.png"),
        content: {
          question: "Trong mô hình Nhấn chìm tăng (Bullish Engulfing), điều gì xảy ra?",
          answer: 1,
          options: [
            "Nến giảm dài hơn",
            "Nến tăng bao phủ hoàn toàn nến giảm trước đó",
            "Nến nhỏ hơn nến trước",
            "Không có sự bao phủ"
          ]
        },
        nextQuiz: "morning-star",
        previousQuiz: "shooting-star",
      },
      "morning-star": {
        title: "Trắc nghiệm bài 8: Sao Mai & Sao Hôm",
        uri: require("../assets/images/sections/lesson8.png"),
        content: {
          question: "Mô hình Sao Mai (Morning Star) báo hiệu điều gì?",
          answer: 3,
          options: [
            "Tiếp diễn xu hướng giảm",
            "Đảo chiều từ tăng sang giảm",
            "Thị trường đi ngang",
            "Đảo chiều từ giảm sang tăng"
          ]
        },
        nextQuiz: null,
        previousQuiz: "engulfing",
      },
    },
    nextSection: "continuation",
  },
  continuation: {
    title: "Trắc nghiệm phần 3: Mô hình Nến Tiếp Diễn",
    description: "Nhận biết các mô hình nến báo hiệu xu hướng hiện tại có khả năng tiếp tục",
    lessons: {
      "rising-three-methods": {
        title: "Trắc nghiệm bài 9: Ba Nến Tăng & Ba Nến Giảm",
        uri: require("../assets/images/sections/lesson9.png"),
        content: {
          question: "Mô hình Ba Nến Tăng (Rising Three Methods) cho thấy điều gì?",
          answer: 2,
          options: [
            "Đảo chiều từ tăng sang giảm",
            "Tạm nghỉ rồi tiếp tục giảm",
            "Tạm nghỉ trong xu hướng tăng, rồi tiếp tục tăng",
            "Thị trường không rõ xu hướng"
          ]
        },
        nextQuiz: "doji",
        previousQuiz: null,
      },
      doji: {
        title: "Trắc nghiệm bài 10: Doji và các biến thể",
        uri: require("../assets/images/sections/lesson10.png"),
        content: {
          question: "Nến Doji thường biểu thị điều gì?",
          answer: 2,
          options: [
            "Bên mua chiếm ưu thế",
            "Bên bán chiếm ưu thế",
            "Sự lưỡng lự giữa bên mua và bên bán",
            "Không có ý nghĩa thị trường"
          ]
        },
        nextQuiz: "spinning-top",
        previousQuiz: "rising-three-methods",
      },
      "spinning-top": {
        title: "Trắc nghiệm bài 11: Con Xoay & Marubozu",
        uri: require("../assets/images/sections/lesson11.png"),
        content: {
          question: "Nến Marubozu thường thể hiện điều gì?",
          answer: 2,
          options: [
            "Không có lực thị trường rõ ràng",
            "Thị trường đang đi ngang",
            "Động lượng mạnh theo hướng đóng cửa",
            "Dấu hiệu đảo chiều nhẹ"
          ]
        },
        nextQuiz: null,
        previousQuiz: "doji",
      },
    },
    nextSection: "reversalChart",
  },
  reversalChart: {
    title: "Trắc nghiệm phần 4: Mô hình Biểu Đồ Đảo Chiều",
    description: "Nhận biết các mô hình biểu đồ báo hiệu khả năng đảo chiều xu hướng",
    lessons: {
      doubleTopBottom: {
        title: "Trắc nghiệm bài 12: Đỉnh Kép & Đáy Kép",
        uri: require("../assets/images/sections/lesson12.png"),
        content: {
          question: "Mô hình Đỉnh Kép (Double Top) thường báo hiệu gì?",
          answer: 3,
          options: [
            "Tiếp diễn xu hướng tăng",
            "Thị trường đi ngang",
            "Đảo chiều từ giảm sang tăng",
            "Đảo chiều từ tăng sang giảm"
          ]
        },
        nextQuiz: "headAndShoulders",
        previousQuiz: null,
      },
      headAndShoulders: {
        title: "Trắc nghiệm bài 13: Vai - Đầu - Vai & Vai - Đầu - Vai Ngược",
        uri: require("../assets/images/sections/lesson13.png"),
        content: {
          question: "Mô hình Vai - Đầu - Vai Ngược (Inverse Head and Shoulders) là tín hiệu gì?",
          answer: 2,
          options: [
            "Tiếp diễn xu hướng giảm",
            "Thị trường đi ngang",
            "Đảo chiều từ giảm sang tăng",
            "Tăng rồi giảm"
          ]
        },
        nextQuiz: "roundingTopBottom",
        previousQuiz: "doubleTopBottom",
      },
      roundingTopBottom: {
        title: "Trắc nghiệm bài 14: Đỉnh Tròn & Đáy Tròn",
        uri: require("../assets/images/sections/lesson14.png"),
        content: {
          question: "Mô hình Đáy Tròn (Rounding Bottom) báo hiệu gì?",
          answer: 2,
          options: [
            "Đảo chiều từ tăng sang giảm",
            "Tiếp diễn xu hướng giảm",
            "Đảo chiều từ giảm sang tăng",
            "Không có tín hiệu rõ ràng"
          ]
        },
        nextQuiz: "bumpAndRun",
        previousQuiz: "headAndShoulders",
      },
      bumpAndRun: {
        title: "Trắc nghiệm bài 15: Mô hình Bump and Run Reversal",
        uri: require("../assets/images/sections/lesson15.png"),
        content: {
          question: "Mô hình Bump and Run thường xuất hiện sau giai đoạn nào?",
          answer: 1,
          options: [
            "Biến động nhẹ",
            "Tăng hoặc giảm mạnh và dốc",
            "Thị trường đi ngang",
            "Giai đoạn tích lũy"
          ]
        },
        nextQuiz: null,
        previousQuiz: "roundingTopBottom",
      },
    },
    nextSection: "continuationChart",
  },
  continuationChart: {
    title: "Trắc nghiệm phần 5: Mô hình Biểu Đồ Tiếp Diễn",
    description: "Các mô hình giá báo hiệu xu hướng hiện tại sẽ tiếp tục sau giai đoạn tích lũy hoặc điều chỉnh",
    lessons: {
      flag: {
        title: "Trắc nghiệm bài 16: Cờ và Cờ đuôi nheo",
        uri: require("../assets/images/sections/lesson16.png"),
        content: {
          question: "Mô hình Cờ (Flag) là dạng gì?",
          answer: 2,
          options: [
            "Đảo chiều",
            "Không có tín hiệu",
            "Tiếp diễn sau một xu hướng mạnh",
            "Giai đoạn tích lũy dài hạn"
          ]
        },
        nextQuiz: "ascending-descending-triangle",
        previousQuiz: null,
      },
      "ascending-descending-triangle": {
        title: "Trắc nghiệm bài 17: Tam giác tăng và Tam giác giảm",
        uri: require("../assets/images/sections/lesson17.png"),
        content: {
          question: "Tam giác tăng (Ascending Triangle) thường phá vỡ theo hướng nào?",
          answer: 2,
          options: [
            "Hướng xuống",
            "Không rõ",
            "Hướng lên (tăng giá)",
            "Đi ngang"
          ]
        },
        nextQuiz: "symmetrical-triangle",
        previousQuiz: "flag",
      },
      "symmetrical-triangle": {
        title: "Trắc nghiệm bài 18: Tam giác cân",
        uri: require("../assets/images/sections/lesson18.png"),
        content: {
          question: "Tam giác cân (Symmetrical Triangle) cho tín hiệu gì?",
          answer: 3,
          options: [
            "Luôn đảo chiều",
            "Luôn tiếp diễn",
            "Không có tín hiệu",
            "Có thể tiếp diễn hoặc đảo chiều tuỳ hướng phá vỡ"
          ]
        },
        nextQuiz: "rectangle-pattern",
        previousQuiz: "ascending-descending-triangle",
      },
      "rectangle-pattern": {
        title: "Trắc nghiệm bài 19: Mô hình Hình chữ nhật",
        uri: require("../assets/images/sections/lesson19.png"),
        content: {
          question: "Mô hình Hình chữ nhật (Rectangle Pattern) thể hiện điều gì?",
          answer: 2,
          options: [
            "Thị trường mạnh",
            "Biến động lớn",
            "Giai đoạn tích lũy/giằng co giá",
            "Đảo chiều rõ ràng"
          ]
        },
        nextQuiz: null,
        previousQuiz: "symmetrical-triangle",
      },
    },
    nextSection: null,
  },
};
