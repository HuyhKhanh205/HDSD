document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const isSub = path.includes("/manager/") || path.includes("/staff/");
    const p = isSub ? "../" : ""; // Tiền tố đường dẫn

    const menu = `
    <div class="brand"><i class="fa-solid fa-utensils"></i> StarGuardian</div>
    
    <div class="menu-group">Hệ thống</div>
    <a href="${p}index.html" class="menu-item ${path.endsWith('index.html')?'active':''}"><i class="fa-solid fa-right-to-bracket"></i> Đăng nhập</a>

    <div class="menu-group">Quản lý (Manager)</div>
    <a href="${p}manager/dashboard.html" class="menu-item ${path.includes('dashboard.html') && path.includes('manager')?'active':''}"><i class="fa-solid fa-chart-line"></i> Dashboard</a>
    <a href="${p}manager/menu.html" class="menu-item ${path.includes('menu.html')?'active':''}"><i class="fa-solid fa-burger"></i> Thực đơn</a>
    <a href="${p}manager/schedule.html" class="menu-item ${path.includes('schedule.html')?'active':''}"><i class="fa-solid fa-calendar-days"></i> Lịch làm việc</a>
    <a href="${p}manager/promotion.html" class="menu-item ${path.includes('promotion.html')?'active':''}"><i class="fa-solid fa-tags"></i> Khuyến mãi</a>
    <a href="${p}manager/invoice.html" class="menu-item ${path.includes('invoice.html')?'active':''}"><i class="fa-solid fa-file-invoice-dollar"></i> Hóa đơn</a>
    <a href="${p}manager/employee.html" class="menu-item ${path.includes('employee.html')?'active':''}"><i class="fa-solid fa-id-card"></i> Nhân viên</a>

    <div class="menu-group">Nhân viên (Staff)</div>
    <a href="${p}staff/dashboard.html" class="menu-item ${path.includes('dashboard.html') && path.includes('staff')?'active':''}"><i class="fa-solid fa-user-clock"></i> Vào ca & Dash</a>
    <a href="${p}staff/sales.html" class="menu-item ${path.includes('sales.html')?'active':''}"><i class="fa-solid fa-bell-concierge"></i> Bán hàng & Order</a>
    <a href="${p}staff/booking.html" class="menu-item ${path.includes('booking.html')?'active':''}"><i class="fa-solid fa-address-book"></i> Đặt bàn</a>
    <a href="${p}staff/member.html" class="menu-item ${path.includes('member.html')?'active':''}"><i class="fa-solid fa-users"></i> Thành viên</a>
    <a href="${p}staff/schedule_view.html" class="menu-item ${path.includes('schedule_view.html')?'active':''}"><i class="fa-regular fa-calendar"></i> Xem lịch làm</a>
    `;

    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    sidebar.innerHTML = menu;
    document.body.prepend(sidebar);
});