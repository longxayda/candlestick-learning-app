export const quizzes = {
  basics: {
    title: "Trắc nghiệm phần 1: Cơ bản về Nến Nhật",
    description: "Tìm hiểu những kiến thức nền tảng về mô hình nến Nhật",
    lessons: {
      intro: {
        title: "Trắc nghiệm bài 1: Nến Nhật là gì?",
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
        title: "Trắc nghiệm bài 5: Hammer & Inverted Hammer",
        content: {
          "question": "Nến Hammer xuất hiện trong xu hướng nào để có hiệu lực cao nhất?",
          "answer": 2,
          "options": [
            "Xu hướng tăng",
            "Thị trường sideway",
            "Xu hướng giảm",
            "Không phụ thuộc xu hướng"
          ]
        },
        nextQuiz: "shooting-star",
        previousQuiz: null,
      },
      "shooting-star": {
        title: "Trắc nghiệm bài 6: Shooting Star & Hanging Man",
        content: {
          "question": "Điểm đặc trưng của nến Shooting Star là gì?",
          "answer": 2,
          "options": [
            "Bóng dưới dài",
            "Thân nến dài",
            "Bóng trên dài, thân nhỏ, gần đáy nến",
            "Thân to và không có bóng"
          ]
        },
        nextQuiz: "engulfing",
        previousQuiz: "hammer",
      },
      engulfing: {
        title: "Trắc nghiệm bài 7: Bullish & Bearish Engulfing",
        content: {
          "question": "Trong mô hình Bullish Engulfing, điều gì xảy ra?",
          "answer": 1,
          "options": [
            "Nến giảm dài hơn",
            "Nến tăng bao phủ hoàn toàn nến giảm trước đó",
            "Nến nhỏ hơn nến trước",
            "Không có bao phủ"
          ]
        },
        nextQuiz: "morning-star",
        previousQuiz: "shooting-star",
      },
      "morning-star": {
        title: "Trắc nghiệm bài 8: Morning Star & Evening Star",
        content: {
          "question": "Mô hình Morning Star báo hiệu gì?",
          "answer": 3,
          "options": [
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
        title: "Trắc nghiệm bài 9: Rising Three Methods & Falling Three Methods",
        content: {
          "question": "Mô hình Rising Three Methods cho thấy điều gì?",
          "answer": 2,
          "options": [
            "Đảo chiều tăng thành giảm",
            "Tạm nghỉ rồi tiếp tục giảm",
            "Tạm nghỉ trong xu hướng tăng, rồi tiếp tục tăng",
            "Thị trường không rõ ràng"
          ]
        },
        nextQuiz: "doji",
        previousQuiz: null,
      },
      doji: {
        title: "Trắc nghiệm bài 10: Doji và các biến thể",
        content: {
          "question": "Nến Doji biểu thị điều gì?",
          "answer": 2,
          "options": [
            "Mua chiếm ưu thế",
            "Bán chiếm ưu thế",
            "Sự lưỡng lự giữa bên mua và bên bán",
            "Không có ý nghĩa"
          ]
        },
        nextQuiz: "spinning-top",
        previousQuiz: "rising-three-methods",
      },
      "spinning-top": {
        title: "Trắc nghiệm bài 11: Spinning Top & Marubozu",
        content: {
          "question": "Nến Marubozu thường thể hiện điều gì?",
          "answer": 2,
          "options": [
            "Không có lực rõ ràng",
            "Thị trường đi ngang",
            "Động lượng mạnh theo hướng đóng",
            "Sự đảo chiều nhẹ"
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
        title: "Trắc nghiệm bài 12: Double Top & Double Bottom",
        content: {
          "question": "Mô hình Double Top thường báo hiệu gì?",
          "answer": 3,
          "options": [
            "Tiếp diễn tăng",
            "Đi ngang",
            "Đảo chiều từ giảm sang tăng",
            "Đảo chiều từ tăng sang giảm"
          ]
        },
        nextQuiz: "headAndShoulders",
        previousQuiz: null,
      },
      headAndShoulders: {
        title: "Trắc nghiệm bài 13: Head and Shoulders & Inverse Head and Shoulders",
        content: {
          "question": "Mô hình Inverse Head and Shoulders là tín hiệu gì?",
          "answer": 2,
          "options": [
            "Tiếp diễn xu hướng giảm",
            "Đi ngang",
            "Đảo chiều từ giảm sang tăng",
            "Tăng rồi giảm"
          ]
        },
        nextQuiz: "roundingTopBottom",
        previousQuiz: "doubleTopBottom",
      },
      roundingTopBottom: {
        title: "Trắc nghiệm bài 14: Rounding Top & Rounding Bottom",
        content: {
          "question": "Rounding Bottom báo hiệu gì?",
          "answer": 2,
          "options": [
            "Tăng sang giảm",
            "Tiếp diễn giảm",
            "Đảo chiều từ giảm sang tăng",
            "Không có tín hiệu"
          ]
        },
        nextQuiz: "bumpAndRun",
        previousQuiz: "headAndShoulders",
      },
      bumpAndRun: {
        title: "Trắc nghiệm bài 15: Bump and Run Reversal",
        content: {
          "question": "Mô hình Bump and Run thường xuất hiện sau giai đoạn nào?",
          "answer": 1,
          "options": [
            "Biến động nhẹ",
            "Tăng/giảm nhanh và dốc",
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
        title: "Trắc nghiệm bài 16: Flag & Pennant",
        content: {
          "question": "Mô hình Flag là dạng gì?",
          "answer": 2,
          "options": [
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
        title: "Trắc nghiệm bài 17: Ascending & Descending Triangle",
        content: {
          "question": "Ascending Triangle thường phá vỡ theo hướng nào?",
          "answer": 2,
          "options": [
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
        title: "Trắc nghiệm bài 18: Symmetrical Triangle",
        content: {
          "question": "Symmetrical Triangle cho tín hiệu gì?",
          "answer": 3,
          "options": [
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
        title: "Trắc nghiệm bài 19: Rectangle Pattern",
        content: {
          "question": "Rectangle Pattern thể hiện điều gì?",
          "answer": 2,
          "options": [
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
