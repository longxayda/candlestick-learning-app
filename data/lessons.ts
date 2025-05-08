export const lessons = {
  basics: {
    title: "Phần 1: Cơ bản về Nến Nhật",
    description: "Tìm hiểu những kiến thức nền tảng về mô hình nến Nhật",
    backgroundImg: require("../assets/images/background/section1.jpg"),
    lessons: {
      intro: {
        title: "Bài 1: Nến Nhật là gì?",
        uri: require("../assets/images/sections/candlestick.png"),
        content: [
          {
            type: "text",
            value:
              "Nến Nhật biểu thị biến động giá trong một khoảng thời gian cụ thể, bao gồm bốn mức giá: Mở cửa, Cao nhất, Thấp nhất và Đóng cửa (OHLC).",
          },
          {
            type: "text",
            value:
              "Biểu đồ nến bắt nguồn từ Nhật Bản hơn 300 năm trước và ngày nay là một công cụ phổ biến trong phân tích kỹ thuật hiện đại.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745478529/1_kzwxpe.jpg",
            alt: "Cấu trúc cơ bản của nến với các mức giá OHLC",
          },
          {
            type: "text",
            value:
              "Mỗi cây nến cung cấp cái nhìn sâu sắc về tâm lý thị trường trong khung thời gian được chọn.",
          },
        ],
        nextLesson: "colors",
        previousLesson: null,
      },
      colors: {
        title: "Bài 2: Màu sắc và độ dài nến",
        uri: require("../assets/images/sections/lesson2.png"),
        content: [
          {
            type: "text",
            value:
              "Nến tăng (thường có màu xanh lá hoặc trắng) thể hiện giá đóng cửa cao hơn giá mở cửa. Nến giảm (thường có màu đỏ hoặc đen) thể hiện giá đóng cửa thấp hơn giá mở cửa.",
          },
          {
            type: "text",
            value:
              "Thân nến thể hiện phạm vi giữa giá mở và giá đóng. Thân dài thể hiện động lượng mạnh; thân ngắn cho thấy sự lưỡng lự hoặc chuyển động yếu.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745478822/1_jsmbut.jpg",
            alt: "So sánh giữa nến tăng và nến giảm",
          },
          {
            type: "text",
            value:
              "Bóng nến (râu nến) cho thấy giá cao nhất và thấp nhất đã đạt được. Bóng dài thường thể hiện sự từ chối giá hoặc vùng thị trường kiểm tra.",
          },
        ],
        nextLesson: "psychology",
        previousLesson: "intro",
      },
      psychology: {
        title: "Bài 3: Tâm lý thị trường sau mỗi cây nến",
        uri: require("../assets/images/sections/lesson3.png"),
        content: [
          {
            type: "text",
            value:
              "Nến phản ánh cuộc chiến tâm lý giữa người mua và người bán. Ví dụ, một cây nến tăng mạnh thể hiện người mua đang kiểm soát thị trường.",
          },
          {
            type: "text",
            value:
              "Một cây nến doji cho thấy sự lưỡng lự, khi cả hai phe đều không giành được ưu thế rõ ràng. Bóng dài có thể là dấu hiệu của sự từ chối giá hoặc phá vỡ thất bại.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745479938/1_pzmw0c.jpg",
            alt: "Ý nghĩa tâm lý phía sau hình dạng nến",
          },
        ],
        nextLesson: "single-vs-patterns",
        previousLesson: "colors",
      },
      "single-vs-patterns": {
        title: "Bài 4: Nến đơn và mô hình nến",
        uri: require("../assets/images/sections/lesson4.png"),
        content: [
          {
            type: "text",
            value:
              "Một cây nến đơn lẻ có thể mang thông điệp nhất định, nhưng sự kết hợp từ hai nến trở lên thường tạo thành mô hình có ý nghĩa dự báo mạnh hơn.",
          },
          {
            type: "text",
            value:
              "Ví dụ: Hammer là một nến đơn có thể đảo chiều tăng. Mô hình Engulfing kết hợp hai nến và thường thể hiện sự thay đổi mạnh mẽ về động lượng.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745480576/nen-hammer-1_eok9r7.jpg",
            alt: "So sánh giữa nến đơn và mô hình nhiều nến",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745480575/image_wqfhaa.png",
            alt: "So sánh giữa nến đơn và mô hình nhiều nến",
          },
          {
            type: "text",
            value:
              "Ngữ cảnh rất quan trọng — các mô hình sẽ đáng tin cậy hơn khi xuất hiện gần vùng hỗ trợ/kháng cự hoặc sau một xu hướng mạnh.",
          },
        ],
        nextLesson: null,
        previousLesson: "psychology",
      },
    },
    nextSection: "reversals",
  },
  reversals: {
    title: "Phần 2: Mô hình nến đảo chiều",
    description: "Nhận biết các mô hình nến báo hiệu khả năng đảo chiều xu hướng",
    backgroundImg: require("../assets/images/background/section2.jpg"),
    lessons: {
      hammer: {
        title: "Bài 5: Hammer & Inverted Hammer",
        content: [
          {
            type: "text",
            value:
              "Hammer là mô hình nến đơn xuất hiện sau xu hướng giảm, báo hiệu khả năng đảo chiều tăng giá.",
          },
          {
            type: "text",
            value:
              "Đặc điểm: thân nhỏ, bóng dưới dài (ít nhất gấp đôi thân), gần như không có bóng trên.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745483629/mau-nen-hammer_aornjo.png",
            alt: "Hình minh họa nến Hammer",
          },
          {
            type: "text",
            value:
              "Inverted Hammer tương tự nhưng bóng trên dài. Cũng xuất hiện sau xu hướng giảm và mang tín hiệu tăng yếu.",
          },
        ],
        nextLesson: "shooting-star",
        previousLesson: null,
      },
      "shooting-star": {
        title: "Bài 6: Shooting Star & Hanging Man",
        content: [
          {
            type: "text",
            value:
              "Shooting Star là mô hình nến giảm xuất hiện sau xu hướng tăng. Đặc điểm: thân nhỏ, bóng trên dài, bóng dưới ngắn hoặc không có.",
          },
          {
            type: "text",
            value:
              "Bóng trên dài cho thấy giá bị từ chối mạnh mẽ, báo hiệu khả năng đảo chiều giảm.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745484172/Nen-Shooting-Star_gcq2eu.png",
            alt: "Hình minh họa Shooting Star",
          },
          {
            type: "text",
            value:
              "Hanging Man thì ngược lại: xuất hiện sau xu hướng tăng, có bóng dưới dài như Hammer, nhưng mang tín hiệu giảm giá.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745484171/Nen-Nguoi-Treo-Co_ggjzpo.png",
            alt: "Hình minh họa Shooting Star",
          },
        ],
        nextLesson: "engulfing",
        previousLesson: "hammer",
      },
      engulfing: {
        title: "Bài 7: Bullish & Bearish Engulfing",
        content: [
          {
            type: "text",
            value:
              "Engulfing là mô hình hai nến thể hiện sự đảo chiều rõ rệt nhờ cây nến thứ hai “nuốt trọn” cây nến đầu tiên.",
          },
          {
            type: "text",
            value:
              "Bullish Engulfing: xuất hiện sau xu hướng giảm, nến tăng lớn bao trùm hoàn toàn nến giảm trước đó → tín hiệu đảo chiều tăng.",
          },
          {
            type: "text",
            value:
              "Bearish Engulfing: ngược lại, xuất hiện sau xu hướng tăng, báo hiệu đảo chiều giảm.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745484980/unnamed_hd5qno.png",
            alt: "Minh họa mô hình Bullish và Bearish Engulfing",
          },
        ],
        nextLesson: "morning-star",
        previousLesson: "shooting-star",
      },
      "morning-star": {
        title: "Bài 8: Morning Star & Evening Star",
        content: [
          {
            type: "text",
            value:
              "Morning Star là mô hình ba nến xuất hiện sau xu hướng giảm, báo hiệu đảo chiều tăng.",
          },
          {
            type: "text",
            value:
              "Cấu trúc: nến giảm mạnh → nến nhỏ (doji/spinning top) → nến tăng mạnh. Cho thấy sự chuyển giao quyền kiểm soát từ bán sang mua.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745485849/nen-morningstar-01_dzr52b.png",
            alt: "Hình minh họa Morning Star và Evening Star",
          },
          {
            type: "text",
            value:
              "Evening Star là mô hình đảo chiều giảm, có cấu trúc tương tự nhưng ngược lại và xuất hiện sau xu hướng tăng.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745485849/nen-evening-star-01_npxazn.jpg",
            alt: "Hình minh họa Morning Star và Evening Star",
          },
        ],
        nextLesson: null,
        previousLesson: "engulfing",
      },
    },
    nextSection: "continuation",
  },
  continuation: {
    title: "Phần 3: Mô hình Nến Tiếp Diễn",
    description: "Nhận biết các mô hình nến báo hiệu xu hướng hiện tại có khả năng tiếp tục",
    lessons: {
      "rising-three-methods": {
        title: "Bài 9: Rising Three Methods & Falling Three Methods",
        content: [
          {
            type: "text",
            value:
              "Rising Three Methods là mô hình nến tiếp diễn tăng giá, xuất hiện trong xu hướng tăng, cho thấy xu hướng tăng có khả năng tiếp tục.",
          },
          {
            type: "text",
            value:
              "Cấu trúc: Một nến tăng dài → ba nến giảm nhỏ liên tiếp (nằm trong phạm vi nến tăng đầu) → một nến tăng dài khác xác nhận xu hướng.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745544899/Rising-Three-Methods-large_eeziun.png",
            alt: "Hình minh họa Rising Three Methods",
          },
          {
            type: "text",
            value:
              "Falling Three Methods là mô hình ngược lại, xuất hiện trong xu hướng giảm, báo hiệu xu hướng giảm tiếp tục. Cấu trúc: nến giảm dài → ba nến tăng nhỏ → nến giảm dài xác nhận.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745544974/Falling-Three-methods_l9tup4.png",
            alt: "Hình minh họa Rising Three Methods",
          },
        ],
        nextLesson: "doji",
        previousLesson: null,
      },
      doji: {
        title: "Bài 10: Doji và các biến thể",
        content: [
          {
            type: "text",
            value:
              "Doji là mô hình nến thể hiện sự do dự của thị trường, khi giá mở cửa và đóng cửa gần bằng nhau. Trong xu hướng tiếp diễn, Doji có thể báo hiệu sự tạm nghỉ trước khi xu hướng tiếp tục.",
          },
          {
            type: "text",
            value:
              "Dragonfly Doji: Có bóng dưới dài, gần như không có bóng trên, xuất hiện trong xu hướng giảm, báo hiệu khả năng tiếp diễn hoặc đảo chiều tùy ngữ cảnh.",
          },
          {
            type: "text",
            value:
              "Gravestone Doji: Ngược lại, có bóng trên dài, xuất hiện trong xu hướng tăng, báo hiệu áp lực bán mạnh.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745545121/7-dragonfly-doji1_on6f9g.jpg",
            alt: "Hình minh họa các biến thể Doji",
          },
          {
            type: "text",
            value:
              "Long-legged Doji: Có cả bóng trên và dưới dài, thể hiện sự do dự mạnh, thường xuất hiện trước khi xu hướng tiếp tục hoặc đảo chiều.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745545219/unnamed_g86o9p.jpg",
            alt: "Hình minh họa các biến thể Doji",
          },
        ],
        nextLesson: "spinning-top",
        previousLesson: "rising-three-methods",
      },
      "spinning-top": {
        title: "Bài 11: Spinning Top & Marubozu",
        content: [
          {
            type: "text",
            value:
              "Spinning Top là nến có thân nhỏ, bóng trên và dưới dài gần bằng nhau, thể hiện sự cân bằng giữa mua và bán. Trong xu hướng tiếp diễn, nó báo hiệu thị trường tạm nghỉ trước khi tiếp tục xu hướng.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745545534/Spinning-Top-Candlestick_pcdxyy.jpg",
            alt: "Hình minh họa Spinning Top và Marubozu",
          },
          {
            type: "text",
            value:
              "Marubozu là nến có thân dài, gần như không có bóng trên hoặc dưới, thể hiện sức mạnh của xu hướng. Marubozu tăng (thân trắng) xuất hiện trong xu hướng tăng, Marubozu giảm (thân đen) xuất hiện trong xu hướng giảm, báo hiệu xu hướng mạnh mẽ tiếp diễn.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745545357/Diagram-of-marubozu-candles_haeyfv.webp",
            alt: "Hình minh họa Spinning Top và Marubozu",
          },
        ],
        nextLesson: null,
        previousLesson: "doji",
      },
    },
    nextSection: "reversalChart",
  },
  reversalChart: {
    title: "Phần 4: Mô hình Biểu Đồ Đảo Chiều",
    description: "Nhận biết các mô hình biểu đồ báo hiệu khả năng đảo chiều xu hướng",
    lessons: {
      doubleTopBottom: {
        title: "Bài 12: Double Top & Double Bottom",
        content: [
          {
            type: "text",
            value:
              "Double Top là mô hình đảo chiều giảm, xuất hiện sau xu hướng tăng, có dạng hai đỉnh giá gần bằng nhau, báo hiệu xu hướng giảm sắp xảy ra.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546060/Double-top-chart-pattern_a1dktt.png",
            alt: "Hình minh họa Double Top và Double Bottom",
          },
          {
            type: "text",
            value:
              "Double Bottom là mô hình đảo chiều tăng, xuất hiện sau xu hướng giảm, có dạng hai đáy giá gần bằng nhau, báo hiệu xu hướng tăng sắp xảy ra.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546060/double-bottom-technical-pattern_istlyz.png",
            alt: "Hình minh họa Double Top và Double Bottom",
          },
          {
            type: "text",
            value:
              "Đặc điểm: Hai đỉnh/đáy cách nhau bởi một vùng giá gọi là 'đường viền cổ' (neckline). Sự phá vỡ đường viền cổ xác nhận mô hình.",
          },

        ],
        nextLesson: "headAndShoulders",
        previousLesson: null,
      },
      headAndShoulders: {
        title: "Bài 13: Head and Shoulders & Inverse Head and Shoulders",
        content: [
          {
            type: "text",
            value:
              "Head and Shoulders là mô hình đảo chiều giảm, xuất hiện sau xu hướng tăng, gồm ba đỉnh: hai vai (shoulders) thấp hơn và một đầu (head) cao hơn.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546381/US100_2024-07-26_11-48-54_sjvsez.webp",
            alt: "Hình minh họa Head and Shoulders và Inverse Head and Shoulders",
          },
          {
            type: "text",
            value:
              "Inverse Head and Shoulders là mô hình đảo chiều tăng, xuất hiện sau xu hướng giảm, có cấu trúc ngược lại với ba đáy: hai vai và một đầu.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546485/94_odiwfo.png",
            alt: "Hình minh họa Head and Shoulders và Inverse Head and Shoulders",
          },
          {
            type: "text",
            value:
              "Đường viền cổ nối các đáy (trong Head and Shoulders) hoặc các đỉnh (trong Inverse) là mức xác nhận khi giá phá vỡ.",
          },

        ],
        nextLesson: "roundingTopBottom",
        previousLesson: "doubleTopBottom",
      },
      roundingTopBottom: {
        title: "Bài 14: Rounding Top & Rounding Bottom",
        content: [
          {
            type: "text",
            value:
              "Rounding Top là mô hình đảo chiều giảm, xuất hiện sau xu hướng tăng, có dạng đỉnh cong giống chữ 'U' ngược, báo hiệu xu hướng giảm.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546742/rounding-top-chart_mf03qo.png",
            alt: "Hình minh họa Rounding Top và Rounding Bottom",
          },
          {
            type: "text",
            value:
              "Rounding Bottom là mô hình đảo chiều tăng, xuất hiện sau xu hướng giảm, có dạng đáy cong giống chữ 'U', báo hiệu xu hướng tăng.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546759/HfgBQlejuQAI66c0P7_H9UxT_20231108023702702_en0l4a.webp",
            alt: "Hình minh họa Rounding Top và Rounding Bottom",
          },
          {
            type: "text",
            value:
              "Mô hình này thường hình thành trong thời gian dài, thể hiện sự chuyển đổi dần dần từ xu hướng cũ sang xu hướng mới.",
          },
        ],
        nextLesson: "bumpAndRun",
        previousLesson: "headAndShoulders",
      },
      bumpAndRun: {
        title: "Bài 15: Bump and Run Reversal",
        content: [
          {
            type: "text",
            value:
              "Bump and Run Reversal (BARR) là mô hình đảo chiều xuất hiện sau một xu hướng tăng hoặc giảm mạnh, báo hiệu sự đảo chiều sắp xảy ra.",
          },
          {
            type: "text",
            value:
              "Cấu trúc: Giai đoạn 'Lead-in' (xu hướng ban đầu), 'Bump' (giá tăng/giảm mạnh bất thường), và 'Run' (giá đảo chiều sau khi phá vỡ đường xu hướng).",
          },
          {
            type: "text",
            value:
              "BARR tăng xuất hiện sau xu hướng giảm, BARR giảm xuất hiện sau xu hướng tăng. Đường xu hướng bị phá vỡ là tín hiệu xác nhận.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745546991/bump-and-run-1024x480-3_papayf.webp",
            alt: "Hình minh họa Bump and Run Reversal",
          },
        ],
        nextLesson: null,
        previousLesson: "roundingTopBottom",
      },
    },
    nextSection: "continuationChart",
  },
  continuationChart: {
    title: "Phần 5: Mô hình Biểu Đồ Tiếp Diễn",
    description: "Các mô hình giá báo hiệu xu hướng hiện tại sẽ tiếp tục sau giai đoạn tích lũy hoặc điều chỉnh",
    lessons: {
      flag: {
        title: "Bài 16: Flag & Pennant",
        content: [
          {
            type: "text",
            value:
              "Flag (Lá cờ) và Pennant (Cờ đuôi nheo) là hai mô hình tiếp diễn thường thấy sau một xu hướng mạnh.",
          },
          {
            type: "text",
            value:
              "Flag có hình chữ nhật nghiêng và cho thấy giai đoạn tích lũy ngắn, thường nghiêng ngược hướng với xu hướng chính.",
          },
          {
            type: "text",
            value:
              "Pennant có dạng hình tam giác nhỏ hình thành từ việc giá dao động trong biên độ hẹp.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745547366/pennant-and-flag-patterns-2-1_vs1udo.png",
            alt: "Minh họa mô hình Flag và Pennant",
          },
          {
            type: "text",
            value:
              "Breakout khỏi mô hình kèm khối lượng lớn thường là tín hiệu tiếp diễn xu hướng.",
          },
        ],
        nextLesson: "ascending-descending-triangle",
        previousLesson: null,
      },
      "ascending-descending-triangle": {
        title: "Bài 17: Ascending & Descending Triangle",
        content: [
          {
            type: "text",
            value:
              "Ascending Triangle (Tam giác tăng) là mô hình tiếp diễn tăng giá. Đặc trưng bởi đỉnh ngang và đáy cao dần.",
          },
          {
            type: "text",
            value:
              "Descending Triangle (Tam giác giảm) ngược lại, với đáy ngang và đỉnh thấp dần, thường báo hiệu tiếp diễn xu hướng giảm.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745547473/950162_df4e0a7afecb4a41be70f60bf9d4a2e5_mv2_tb19on.jpg",
            alt: "Minh họa Ascending và Descending Triangle",
          },
          {
            type: "text",
            value:
              "Khối lượng thường giảm dần trong giai đoạn hình thành tam giác và tăng mạnh khi breakout xảy ra.",
          },
        ],
        nextLesson: "symmetrical-triangle",
        previousLesson: "flag",
      },
      "symmetrical-triangle": {
        title: "Bài 18: Symmetrical Triangle",
        content: [
          {
            type: "text",
            value:
              "Symmetrical Triangle (Tam giác đối xứng) là mô hình tiếp diễn trung lập hình thành khi giá thu hẹp dần với đỉnh thấp dần và đáy cao dần.",
          },
          {
            type: "text",
            value:
              "Mô hình này phản ánh sự do dự giữa bên mua và bán. Khi giá phá vỡ ra khỏi tam giác, xu hướng mới thường tiếp diễn theo hướng breakout.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745547788/Triangles_AShortStudyinContinuationPatterns3_2-6eb5b82169aa45859c5696835f97244f-0886dbfef93d40d7a20a67836e32226e_buhidj.png",
            alt: "Minh họa mô hình Tam giác đối xứng",
          },
          {
            type: "text",
            value:
              "Phù hợp trong cả xu hướng tăng và giảm, nhưng cần quan sát khối lượng để xác nhận breakout.",
          },
        ],
        nextLesson: "rectangle-pattern",
        previousLesson: "ascending-descending-triangle",
      },
      "rectangle-pattern": {
        title: "Bài 19: Rectangle Pattern",
        content: [
          {
            type: "text",
            value:
              "Mô hình hình chữ nhật (Rectangle) xuất hiện khi giá dao động trong một phạm vi ngang, giữa hai mức hỗ trợ và kháng cự rõ ràng.",
          },
          {
            type: "text",
            value:
              "Đây là giai đoạn tích lũy hoặc nghỉ ngơi trước khi giá tiếp tục xu hướng trước đó.",
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dybmh6wnf/image/upload/v1745547893/How-to-Trade-Rectangle-Top-Pattern_ihuqej.webp",
            alt: "Minh họa mô hình Rectangle",
          },
          {
            type: "text",
            value:
              "Khi giá breakout khỏi vùng biên với volume cao, có thể xem là tín hiệu tiếp diễn xu hướng cũ.",
          },
        ],
        nextLesson: null,
        previousLesson: "symmetrical-triangle",
      },
    },
    nextSection: null,
  },
};
