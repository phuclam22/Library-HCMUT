import React from "react";
import "../assets/css/emp_header.css";
import "../assets/css/emp_personalinfo.css";
import avatarImg from "../assets/img/emp_personalinfo_avatarmen.png";

const PersonalInfo = () => {
  const personalDetails = {
    fullName: "Trần Minh Hiếu",
    position: "Nhân viên thư viện",
    cccd: "001082946357",
    employeeCode: "EM1412",
    dob: "28/09/1999",
    gender: "Nam",
    address: "Khu phố 6, P. Linh Trung, Tp. Thủ Đức, Tp. HCM",
    email: "hieuthuhai@hcmut.edu.vn",
    phone: "085.7777.999",
  };

  return (
    <div className="personal-info-container">
      <div className="personal-info-content">
        <img src={avatarImg} alt="Avatar" className="avatar-img" />
        <h1>{personalDetails.fullName}</h1>
        <p>{personalDetails.position}</p>

        <div className="info-details">
          <p>
            <strong>Họ và tên:</strong> {personalDetails.fullName}
          </p>
          <p>
            <strong>CCCD:</strong> {personalDetails.cccd}
          </p>
          <p>
            <strong>Mã nhân viên:</strong> {personalDetails.employeeCode}
          </p>
          <p>
            <strong>Ngày sinh:</strong> {personalDetails.dob}
          </p>
          <p>
            <strong>Giới tính:</strong> {personalDetails.gender}
          </p>
          <p>
            <strong>Địa chỉ liên lạc:</strong> {personalDetails.address}
          </p>
          <p>
            <strong>Email:</strong> {personalDetails.email}
          </p>
          <p>
            <strong>SĐT:</strong> {personalDetails.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
