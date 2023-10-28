/* eslint-disable no-unused-vars */
import HomeIcon from "@mui/icons-material/Home";

import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { userEmailState } from "../store/selectors/userEmail";
import { userState } from "../store/atoms/user";

const Navbar = () => {
  const navigate = useNavigate();

  const userLoading = useRecoilValue(isUserLoading);
  const userEmail = useRecoilValue(userEmailState);
  const setUser = useSetRecoilState(userState);

  // if(userLoading) return( <div>User Loading</div> )
  return (
    <div>
      <div className="shadow-minimal">
        <div className="nav">
          <div className="options">
            <NavLink to="/">
              <HomeIcon sx={{ fontSize: 30 }} />
            </NavLink>
            <NavLink className="pt-1 text-gray-blue text-sm">
              HealthGuide
            </NavLink>
          </div>
          <div className="options">
            <div className="options">
              <NavLink to="/" className=" text-gray-blue text-">Home</NavLink>
              <NavLink to="/" className=" text-gray-blue text-sm">Services</NavLink>
              <NavLink className=" text-gray-blue text-sm" to="/about">About</NavLink>
              <NavLink to="/medicine" className=" text-gray-blue text-sm">Online Medicine</NavLink>
              <NavLink to="/contact" className=" text-gray-blue text-sm">Contact</NavLink>
              <NavLink to="/Edu" className=" text-gray-blue text-sm">Education</NavLink>
            </div>

            {userEmail ? (
              <div className="options">
                <button
                  className="white_btn px-3 h-8"
                  onClick={() => {
                    localStorage.setItem("token", null);
                    setUser({
                      isLoading: false,
                      userEmail: null
                    })
                    navigate("/users/login");
                  }}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  className="white_btn px-3 h-8"
                  onClick={() => navigate("/users/login")}
                >
                  Log In
                </button>
                <button
                  className="black_btn px-3 h-8"
                  onClick={() => navigate("/users/register")}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
