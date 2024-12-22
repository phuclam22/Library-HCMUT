import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../assets/css/emp_header.css";
import "../assets/css/emp_managadocs.css";

import sidebarIcon from "../assets/img/emp_managedocs_icondanhmuc.svg";
import addDocumentIcon from "../assets/img/emp_managedocs_iconthemtailieu.svg";
import backIcon from "../assets/img/emp_managedocs_back.svg";
import nextIcon from "../assets/img/emp_managedocs_next.svg";

import book1 from "../assets/img/emp_managedocs_book1.svg";
import book2 from "../assets/img/emp_managedocs_book2.svg";
import book3 from "../assets/img/emp_managedocs_book3.svg";
import book4 from "../assets/img/emp_managedocs_book4.svg";
import book5 from "../assets/img/emp_managedocs_book5.svg";
import book6 from "../assets/img/emp_managedocs_book6.svg";
import book7 from "../assets/img/emp_managedocs_book7.svg";
import book8 from "../assets/img/emp_managedocs_book8.svg";
import book9 from "../assets/img/emp_managedocs_book9.svg";
import book10 from "../assets/img/emp_managedocs_book10.svg";

const ManageDocs = () => {
  const navigate = useNavigate(); 

  const documents = [
    { img: book1, title: "Hóa đại cương", author: "Nguyễn Đình Soa" },
    { img: book2, title: "Giải tích 1", author: "Nguyễn Đình Huy (CB)" },
    { img: book3, title: "Giải tích 2", author: "Nguyễn Đình Huy (CB)" },
    { img: book4, title: "Kỹ thuật lập trình", author: "Nguyễn Trung Trực" },
    { img: book5, title: "Cấu trúc dữ liệu và giải thuật", author: "Nguyễn Trung Trực" },
    { img: book6, title: "Triết học Mác - Lênin", author: "Bộ GD & ĐT" },
    { img: book7, title: "Kinh tế chính trị Mác - Lênin", author: "Bộ GD & ĐT" },
    { img: book8, title: "Chủ nghĩa xã hội khoa học", author: "Bộ GD & ĐT" },
    { img: book9, title: "Lịch sử Đảng Cộng sản Việt Nam", author: "Bộ GD & ĐT" },
    { img: book10, title: "Tư tưởng Hồ Chí Minh", author: "Bộ GD & ĐT" },
  ];

  const categories = [
    "Tất cả",
    "Bảo dưỡng công nghiệp",
    "Cơ khí",
    "Kỹ thuật địa chất và dầu khí",
    "Điện - Điện tử",
    "Kỹ thuật giao thông",
    "Kỹ thuật hóa học",
    "Môi trường và tài nguyên",
    "Khoa học và kỹ thuật máy tính",
    "Quản lý công nghiệp",
    "Khoa học ứng dụng",
    "Công nghệ vật liệu",
    "Kỹ thuật xây dựng",
  ];

  const handleNavigateToDetail = (doc) => {
    navigate("/docs-detail", { state: { doc } }); 
  };

  return (
    <div className="main-container">
      <aside className="sidebar">
        <h3>
          <img src={sidebarIcon} alt="Danh mục Icon" className="icon" />
          DANH MỤC
        </h3>
        <ul>
        {categories.map((category, index) => (
            <li key={index}>
              <a href="/manage-docs">{category}</a>
            </li>
          ))}
        </ul>
        
        <button
          className="add-document"
          onClick={() => navigate("/add-document")} 
        >
          <img src={addDocumentIcon} alt="Thêm Tài Liệu Icon" className="icon" />
          Thêm Tài Liệu
        </button>
      </aside>

      <section className="content">
        <div className="search-bar">
          <input type="text" placeholder="Nhập tên sách cần tìm" />
        </div>

        <div className="document-grid">
          {documents.map((doc, index) => (
            <div
              className="document-item"
              key={index}
              onClick={() => handleNavigateToDetail(doc)} 
            >
              <img src={doc.img} alt={doc.title} />
              <p className="title">{doc.title}</p>
              <p className="author">{doc.author}</p>
            </div>
          ))}
        </div>

<div className="pagination">
  <span>1 / 100</span>
  
  <button
    className="page-button"
    onClick={() => {
      console.log("Previous Page");
      window.location.reload(); 
    }}
  >
    <img src={backIcon} alt="Previous Page" />
  </button>
  
  <button
    className="page-button"
    onClick={() => {
      console.log("Next Page");
      window.location.reload(); 
    }}
  >
    <img src={nextIcon} alt="Next Page" />
  </button>
</div>

      </section>
    </div>
  );
};

export default ManageDocs;
