const useLogout = () => {
    const logout = () => {
      alert("Đăng xuất thành công");
      window.location.href = "/logout"; 
    };
  
    return { logout };
  };
  
  export default useLogout;
  