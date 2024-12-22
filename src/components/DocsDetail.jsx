import React, { useState } from "react";
import "../assets/css/emp_header.css";
import "../assets/css/emp_docsdetail.css";
import sidebarIcon from "../assets/img/emp_managedocs_icondanhmuc.svg";
import addDocumentIcon from "../assets/img/emp_managedocs_iconthemtailieu.svg";
import bookImage from "../assets/img/emp_managedocs_book1.svg";
import editIcon from "../assets/img/emp_managedocs_iconchinhsua.svg";

const DocsDetail = () => {
  const [docDetails, setDocDetails] = useState({
    title: "Hóa đại cương - Nguyễn Đình Soa",
    id: "CH1003",
    author: "Nguyễn Đình Soa",
    publisher: "Đại học Quốc gia TP. Hồ Chí Minh",
    year: "2004",
    status: "Sẵn có",
    summary: `
      Giáo trình Hóa đại cương nội dung gồm 5 chương:
      - Chương 1: Những khái niệm và định luật cơ sở của hóa học
      - Chương 2: Cấu tạo nguyên tử
      - Chương 3: Định luật tuần hoàn, hệ thống tuần hoàn các nguyên tố hóa học và cấu tạo nguyên tử
      - Chương 4: Liên kết hóa học và cấu tạo phân tử
      - Chương 5: Trạng thái tập hợp của các chất
    `,
  });

  const [editingField, setEditingField] = useState(null);

  const handleEdit = (field) => {
    setEditingField(field);
  };

  const handleBlur = (field, event) => {
    setDocDetails({ ...docDetails, [field]: event.target.innerText });
    setEditingField(null);
  };

  return (
    <div className="main-container">
      <aside className="sidebar">
        <h3>
          <img src={sidebarIcon} alt="Danh mục Icon" className="icon" />
          DANH MỤC
        </h3>
        <ul>
          <li><a href="/manage-docs">Tất cả</a></li>
          <li><a href="/manage-docs">Bảo dưỡng công nghiệp</a></li>
          <li><a href="/manage-docs">Cơ khí</a></li>
          <li><a href="/manage-docs">Kỹ thuật địa chất và dầu khí</a></li>
          <li><a href="/manage-docs">Điện - Điện tử</a></li>
          <li><a href="/manage-docs">Kỹ thuật giao thông</a></li>
          <li><a href="/manage-docs">Kỹ thuật hóa học</a></li>
          <li><a href="/manage-docs">Môi trường và tài nguyên</a></li>
          <li><a href="/manage-docs">Khoa học và kỹ thuật máy tính</a></li>
          <li><a href="/manage-docs">Quản lý công nghiệp</a></li>
          <li><a href="/manage-docs">Khoa học ứng dụng</a></li>
          <li><a href="/manage-docs">Công nghệ vật liệu</a></li>
          <li><a href="/manage-docs">Kỹ thuật xây dựng</a></li>
        </ul>
        <button className="add-document" onClick={() => console.log("Thêm Tài Liệu")}>
          <img src={addDocumentIcon} alt="Thêm Tài Liệu Icon" className="icon" />
          Thêm Tài Liệu
        </button>
      </aside>

      <section className="document-content">
        <div className="document-detail">
          <img src={bookImage} alt={docDetails.title} className="document-image" />
          <div className="document-info">
            <h2>
              <span
                className={`editable ${editingField === "title" ? "editing" : ""}`}
                contentEditable={editingField === "title"}
                suppressContentEditableWarning
                onBlur={(e) => handleBlur("title", e)}
              >
                {docDetails.title}
              </span>
              <img
                src={editIcon}
                alt="Chỉnh sửa"
                className="edit-icon"
                onClick={() => handleEdit("title")}
              />
            </h2>
            {["id", "author", "publisher", "year", "status"].map((field) => (
              <p key={field}>
                <strong>{field === "id" ? "ID" : field === "author" ? "Tác giả" : field === "publisher" ? "Nhà xuất bản" : field === "year" ? "Năm xuất bản" : "Tình trạng"}: </strong>
                <span
                  className={`editable ${editingField === field ? "editing" : ""}`}
                  contentEditable={editingField === field}
                  suppressContentEditableWarning
                  onBlur={(e) => handleBlur(field, e)}
                >
                  {docDetails[field]}
                </span>
                <img
                  src={editIcon}
                  alt="Chỉnh sửa"
                  className="edit-icon"
                  onClick={() => handleEdit(field)}
                />
              </p>
            ))}
          </div>
        </div>

        <div className="document-summary">
          <h3>
            TÓM TẮT NỘI DUNG
            <img
              src={editIcon}
              alt="Chỉnh sửa"
              className="edit-icon"
              onClick={() => handleEdit("summary")}
            />
          </h3>
          <div
            className={`editable ${editingField === "summary" ? "editing" : ""}`}
            contentEditable={editingField === "summary"}
            suppressContentEditableWarning
            onBlur={(e) => handleBlur("summary", e)}
          >
            {docDetails.summary.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsDetail;
