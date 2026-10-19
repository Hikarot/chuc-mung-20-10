/* ============================================================
   CẤU HÌNH DỮ LIỆU & NỘI DUNG THIỆP 20/10
   (Dễ dàng chỉnh sửa thông tin, lời chúc, ảnh và nhạc)
   ============================================================ */

const CONFIG = {
  // Điền đường dẫn file mp3 nếu bạn muốn dùng nhạc riêng (vd: "nhac.mp3" hoặc link online).
  // Nếu để trống (""), hệ thống sẽ tự sinh giai điệu nhẹ nhàng bằng Web Audio API!
  customMp3Url: "",

  // Danh sách các Thẻ Xin Vía May Mắn 20/10
  vouchers: [
    {
      icon: "👑",
      title: "Vía Nhan Sắc Thăng Hạng",
      desc: "Trẻ mãi không già, da đẹp dáng xinh, đi tới đâu tỏa sáng tới đó!"
    },
    {
      icon: "💸",
      title: "Vía Tiền Vô Như Nước",
      desc: "Ví lúc nào cũng dày, học tập & công việc hanh thông, lương thưởng ngập tràn!"
    },
    {
      icon: "🧋",
      title: "Vía Ăn Ngon Không Béo",
      desc: "Trà sữa full topping, ăn ngon khắp thế giới mà dáng vẫn chuẩn chỉnh!"
    },
    {
      icon: "🍀",
      title: "Vía Bình An & Hạnh Phúc",
      desc: "Mọi muộn phiền tan biến, mỗi ngày thức dậy đều ngập tràn năng lượng tích cực!"
    }
  ],

  // Bộ sưu tập ảnh nghệ thuật tôn vinh phái đẹp
  cards: [
    {
      url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
      caption: "Luôn Xinh Đẹp & Tự Tin 🌸"
    },
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      caption: "Độc Lập & Tỏa Sáng ✨"
    },
    {
      url: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
      caption: "Dịu Dàng & Bản Lĩnh 🌷"
    },
    {
      url: "https://images.unsplash.com/photo-1464699908537-0954e50791ee?auto=format&fit=crop&w=600&q=80",
      caption: "Rạng Rỡ Suốt 365 Ngày 👑"
    }
  ],

  // Nội dung bức thư chúc mừng 20/10 (hiệu ứng gõ chữ typewriter)
  letterContent:
    "Nhân ngày Phụ nữ Việt Nam 20/10, xin gửi những lời chúc ngọt ngào và tốt đẹp nhất đến các bà, các mẹ, các chị em và những người bạn tuyệt vời! 🌷\n\n" +
    "Cảm ơn một nửa thế giới vì đã luôn mang đến sự dịu dàng, ấm áp và nguồn cảm hứng tích cực cho cuộc sống này.\n\n" +
    "Chúc bạn không chỉ trong ngày 20/10 hôm nay mà suốt 365 ngày trong năm đều luôn giữ vững nụ cười rạng rỡ trên môi, sức khỏe dồi dào, vạn sự hanh thông và gặt hái thật nhiều thành công trên con đường mình chọn!"
};
