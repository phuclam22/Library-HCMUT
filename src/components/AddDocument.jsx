import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/emp_header.css";
import "../assets/css/emp_adddocument.css";
import sidebarIcon from "../assets/img/emp_managedocs_icondanhmuc.svg";
import addDocumentIcon from "../assets/img/emp_managedocs_iconthemtailieu.svg";

const AddDocument = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    id: "",
    image: null,
    author: "",
    publisher: "",
    year: "",
    status: "",
    summary: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [errors, setErrors] = useState({});

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

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file,
      });
      setPreviewImage(URL.createObjectURL(file)); 
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Tên sách không được để trống.";
    if (!formData.id) newErrors.id = "ID không được để trống.";
    if (!formData.author) newErrors.author = "Tác giả không được để trống.";
    if (!formData.year || formData.year < 1900 || formData.year > 2100)
      newErrors.year = "Năm xuất bản phải nằm trong khoảng 1900 - 2100.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Vui lòng kiểm tra lại các trường thông tin.");
      return;
    }

    console.log("Form data submitted:", formData);
    alert("Tài liệu đã được thêm thành công!");

    // Reset form sau khi gửi
    setFormData({
      title: "",
      id: "",
      image: null,
      author: "",
      publisher: "",
      year: "",
      status: "",
      summary: "",
    });
    setPreviewImage(null);
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

      <section className="document-form">
        <h2>
          <img
            src={addDocumentIcon}
            alt="Thêm Tài Liệu Icon"
            className="icon"
          />
          THÊM TÀI LIỆU
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Tên sách</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          {errors.title && <span className="error">{errors.title}</span>}

          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            required
          />
          {errors.id && <span className="error">{errors.id}</span>}

          <label htmlFor="image">Ảnh</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleInputChange}
          />
          {previewImage && <img src={previewImage} alt="Preview" className="preview" />}

          <label htmlFor="author">Tác giả</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
          {errors.author && <span className="error">{errors.author}</span>}

          <label htmlFor="publisher">Nhà xuất bản</label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            value={formData.publisher}
            onChange={handleInputChange}
          />

          <label htmlFor="year">Năm xuất bản</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            min="1900"
            max="2100"
            onChange={handleInputChange}
          />
          {errors.year && <span className="error">{errors.year}</span>}

          <label htmlFor="status">Tình trạng</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          />

          <label htmlFor="summary">Tóm tắt nội dung</label>
          <textarea
            id="summary"
            name="summary"
            rows="4"
            value={formData.summary}
            onChange={handleInputChange}
          ></textarea>

          <button type="submit">Xác nhận</button>
        </form>
      </section>
    </div>
  );
};

export default AddDocument;
