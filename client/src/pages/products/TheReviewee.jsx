import React from "react";
import Navbar3 from "../../components/Navbar3";
import "../../assets/css/thereviewee.css";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import reviewee from "../../assets/images/reviewee1.jpg";

import { Rate } from "antd";
import Footer from "../../components/Footer";
import ServiceCategory from "../../components/ServiceCategory";
import Location from "../../components/Location";
import { useGlobalContext } from "../../utils/context";
import { connect } from "react-redux";
import {
  SET_SERVICE_CATEGORY,
  SET_SERVICE_LOCATION,
  SET_IS_LOCATION_CONTAINER_OPEN,
  SET_IS_SERVICE_CONTAINER_OPEN,
  SET_BUSINESS_SEARCHED,
} from "../../redux/action";
import axios from "axios";
const url = "http://localhost:5000/api";
//const url = "/api";
import { useNavigate } from "react-router-dom";

const TheReviewee = ({
  serviceCategory,
  setServiceCategory,
  serviceLocation,
  setServiceLocation,

  setIsLocationContainerOpen,

  setIsServiceContainerOpen,
  setBusinessSearched,
}) => {
  const suggestions = [
    { name: "Gramma's Kitchen", img: "", id: 1 },
    { name: "Gramma's Kitchen", img: "", id: 2 },
    { name: "Gramma's Kitchen", img: "", id: 3 },
    { name: "Gramma's Kitchen", img: "", id: 15 },
    { name: "Gramma's Kitchen", img: "", id: 4 },
    { name: "Gramma's Kitchen", img: "", id: 5 },
    { name: "Gramma's Kitchen", img: "", id: 6 },
    { name: "Gramma's Kitchen", img: "", id: 7 },
    { name: "Gramma's Kitchen", img: "", id: 8 },
    { name: "Gramma's Kitchen", img: "", id: 9 },
    { name: "Gramma's Kitchen", img: "", id: 10 },
    { name: "Gramma's Kitchen", img: "", id: 11 },
    { name: "Gramma's Kitchen", img: "", id: 12 },
    { name: "Gramma's Kitchen", img: "", id: 13 },
    { name: "Gramma's Kitchen", img: "", id: 14 },
  ];

  const [suggested, setSuggested] = React.useState(suggestions);
  const [issuggestLoading, setIssuggestLoading] = React.useState(false);

  const navigate = useNavigate();

  const getSearchedBusiness = async (category, location) => {
    return await axios
      .get(`${url}/services?category=${category}&location=${location}`)
      .catch((error) => {
        console.log(error);
        //toast.error(error.message);
      });
  };

  const fetchBusiness = async () => {
    const response = await getSearchedBusiness(
      serviceCategory,
      serviceLocation
    );
    console.log(response.data);
    setBusinessSearched(response.data.items);
    navigate("/review-list");
  };

  const handleCloseSuggestion = (id) => {
    const newSuggestion = suggested.filter((item) => item.id !== id);

    setSuggested(newSuggestion);
    console.log("new", newSuggestion);
    console.log("old", suggestions);
  };

  const {
    // serviceCategory,
    // setServiceCategory,
    // serviceLocation,
    // setServiceLocation,
    // setIsLocationContainerOpen,
    //  setIsServiceContainerOpen,
  } = useGlobalContext();
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Navbar3 />
      <div className="reviewee-container">
        <main className="review-input-container-main">
          <h2>Find a business to review</h2>
          <h4>
            Review anything from your favorite patio spot to your local flower
            shop.
          </h4>
          <form action="" className="reviewee-form1">
            <div className="therevieweeinput1">
              <aside>
                {" "}
                <input
                  type="text"
                  placeholder="try resturants,hotel..."
                  className="find-reviewee-inpt11"
                  name="serviceCategory"
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  onClick={(e) => {
                    if (e.target.className == "find-reviewee-inpt11") {
                      setIsServiceContainerOpen(true);
                      setIsLocationContainerOpen(false);
                    }
                  }}
                />
              </aside>
              <span className="flex-input2-icon">
                <input
                  type="text"
                  className="find-reviewee-inpt21"
                  placeholder="location"
                  name="serviceLocation"
                  value={serviceLocation}
                  onChange={(e) => setServiceLocation(e.target.value)}
                  onClick={(e) => {
                    if (e.target.className == "find-reviewee-inpt21") {
                      setIsLocationContainerOpen(true);
                      setIsServiceContainerOpen(false);
                    }
                  }}
                />{" "}
                <span className="reviewee-icon-div1">
                  <IoSearch
                    className="reviewee-icon1"
                    onClick={fetchBusiness}
                  />
                </span>
              </span>
            </div>
          </form>
          <ServiceCategory />
          <Location />
        </main>
        <div className="reviewee-image">
          <img src={reviewee} alt="" className="reviewee-illus" />
        </div>
      </div>
      <section className="reviewee-section">
        <h3>Visited one of these places recently?</h3>
        <div className="visited-container">
          {issuggestLoading && "Loading..."}
          {suggested.length == 0 &&
            !issuggestLoading &&
            "We’re out of suggestions for you right now. Keep on using Yelp and we’ll have some more for you soon."}

          {suggested.map((item, index) => {
            const { name, img, id } = item;

            return (
              <article className="visited-article" key={id}>
                <div>
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAgEDBAUHCAb/xABEEAABAwMCAwQIAgcECwEAAAABAAIDBAURBhITITEHFkFRFCJWYXGRlKEVsSMyQlVigdFSc7LCJjNFU2NyhKLB4fAk/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAAEEAgICAwAAAAAAAAAAAAECERJRAxQEEyFBIjFh/9oADAMBAAIRAxEAPwD5YJgVWE7V9Z51oKcFVBOCqLQU4KqBTgoi0FOCqgUwKC0FMCqwUwKosBTAqoFMCgsBU5VeVOVUW5RlVgqcoLMoykyjKB8qMpcoygYlRlKSoJQMSoJSkqMoJJUEqCUpKipJSkoJSEoAlKSglKSoIJSEqSUhKCCUhTEpCUVjhOFWCnBUFgKYKsJwqLAnBVQKYFBaCnBVQTgoiwFMCqwUwKosBTAqsFMCgcFSCkBU5QOCjKUFGUD5RlLlGVQ2UZS5QSiJyglLlQSopiVGUpKglAxKUlRlKSgklKSglKSoAlKSglISgHFISpJSEooJSlBKUlBjhOFWCmBWRaCmBVQThUWBOqwmBVFgTgqoKxqIsBUhKE4CCfBMFACkBUSFIUYUoJUqFOEApRhG1AKFOEYQQoTEKMIIKgqcKCEClQU2FBagrJSlOQq3KBSUpKCUpQQSlKkpCUUFKUEpSVBQEwSBMCoqwJgVWCmBRFoKYFVAp2lUXNVrceJA+Koj9ZzWD9Zzg1uT1J5Lp9TFp7Q1jjrLrEJXOc2MyujDnPeQTgZ6DkfkufJyxQsU3c8aOQKcAZwSM/FdBudutGodMuu9oiZFIYDNDI1u3dgZ2uHv+yt1OKWg0FUVDaeLcKaJrX7BnLi1uc/zXPsxNmsJhz1sZx0/nhXRUk0o3RQyPHm1hK+/tEkcPZ16XUsYAy3yyOcWjptcVkwVVfS9n0FVa4DPcG2+N0ULW5L34HLA69VmfK/h63NZoJITtkjexx6B7SFVyOF1Gbj3DRvG1LSxU1Z6M58kYIPCeAcYPn08Vy7dyycYXbh5fZDNVNlsEL5nhkTHvcfBrclXz0FVTN3VFNLG3zewgL7vs8kpDp4PpTD6a5zxJvIzkOIbnxxjHzWt15PqkaUrvSqGgkiaA90lHO9zmNBySQ4DPLyyuVXk/nZr1/F3zLaKpIGKaYj+7KV1LOHtYYJQ5w9UcM5K67M+pjtYNG+BtQIhsNQSI848cc8L5LTd+uF019XUFxFLvttE5u+lcSx5c6M5GefuWe3Oj1vk322sazc6kqA3zMZWPHA+TPDY52OR2tJXTYq3UL9az0po2jT7KdrhUu68QgHA8+eVgxXikoe0N1ph2AV1GJXbcYEzS77lv5Kx5U6PW5/wJDJw2sfv/s7Tn5KTTSh+0xyA4zjYV0uitL4taVteWYiNM0sOOr3kg/INPzCwbJefxPtCvtKx2YaKlhjA/iJdu/8ACs+Vb6PW5++JzDtka5h/iGFfHba2Vgkio53tI6iMkLoHoUVz1tVS1LWvioaeIMY4ci92eZ+AH3Wq1b2m0Wmru61tpZJ54g3fj1QM9OpH2SfKmZtEHrfJxW+rlbujpZ3tz+syMkcuqWooKqnj4k9NNEz+09hAXROzuofPoygqJn4c8SSOLj0y92cr5u76mqKXU1mteoq22VFHO8zPkpmkNY5o9UOyT4nz8FI8qq/6X1w0UNjuVREJYaCpfGejhGea1dXG+nldDMxzJGnDmuGCP5LsFylus8kTrDXWsMDSXtqGueT5bS09Oq5Fqw3SDVVd+NRxMnnLZRwXF0ZZtDQWk88eqevitcXPNdVpSaLMMlKSoDgUpK9DAJSkoJSkoAlKSglKlxSEwSApgsqcFNlIEwKocFSXYGUmVDjySZRj1dQ9g3Ruw4c2/ELpNr1vpvUtmjt+p4ot42l0UwBDnD9oLmlQ3cFhGj3H1gMFcOTjitumbOpau11aKLT0lk0y6PiSRGBghA2QNIwTy93RbTT18s2qtIfhN1m2PMLYZ2bsOG3GHA/EAhceZTBuAAPcnZbZqmTEEEsj/DhsLj9lynhhvJ0ztL1PQU2mnacskgc+WJsL9h/1cQ8PicYWzuerKe29n7JLVWRG4w0cIibnPreqDy+a5tSaNv0wHAsdaQfF0ewf9xC2MPZnqKR270GngJ/31Qwf4cqTx0/cpeX2l/1JZNQaSiElyZT1kkYlZEJWhznjqwtzkg9F8S536LC3Nv7Lbsx4fUVNujP8D3v/AMoW7Z2cTkfpbrGP+WAn/MunFXx8cWulUTLG0YNK1Fmiprm6m/EWvkL/ANJtfguOOhBxjCzNdaxtFu0zUWi0zRy1EsPAjja/dsaRjLv/AGsSq7KbfL61ZeZAPHEbG/4srGPZ7pCkGJ9SFuOoM0TfyC4TFE1Xu1Ezaz7Wsv8ApisofRLhWUssDmt3RveMHH818vZrrpW069rZbdLSUtE+1xtLmOaGvl4rieeeZ2hq1EmlOzmHnLf5HHx2yZ/Jqx5LV2YQt2vu9Y74Od/RTGlX0tD2iUjda3Smq66L8I4LHUsznANDwBuGc+Ofsvg9Q11BTa0/GtP1ZqYRI2fcHbtrv2mg+XL7rOfD2Xt5C4XJ2Om139SkM3ZuwYZV3Y/At/qtUxTCfLq0utLGy3+lGvhGYi8M4gznHT5rmXZnqGjtl+vNyvVVHTmtja4GV4aC7c4kc/LIWseezov3Nq7wD5hsarl7iyDDbveGfGCMqxTTaYLy+ng1/TW/XlwrBJx7TWMjj4kfrBpaOox8Svp6vWOh5Xtrpqi3zztHquJY5/LoPNcrfDpEjEeoqtv95RNP5PVBt+n3n9Dqanz4CSje38ifyTCmZ+C8umaM1fYqTR1vp7lX00U/DfxopJGDBc9xIIJ96018u+h4rtY57dDQmGCpe6p4DWH1DG4DdgnlkhfDSWine7MN5tMg/iklYfvHj7o/BZQDwpaSYf8ACq4z+ZB+yRw03vcydYo9RaCtIdX2/wBBglcCN0JaHEHw6rnOptRd5dQS17GbIGsEULT/AGQTz/nkrTSWapjOXU0nxDd33CaCAx8iCD5FdePiimbs1TeGfE/IT5VDDjknyvTdzsYlKSoyoKAylJRlKVFVhSEgKkFBYCpBSAqQgfKhQCoe7AQLK7Yxzj0HNdZsWibA6gpqmandUvkja4l8h2kkeS45VSHYR4LLi1zqGltkNtpqvhQwja1zR6xHxXDmv9N0u7R2ux2yPiCjoadrf2nsaPu5YddrnTtsBZJdoeX7EXP8uS881ddX18hfV1k8rj4ukJWOIfcuHrn7au7ZXdr9kiJFJT1FQR49AVoKztkrngiit0MfvecrmohJwrBBnwW44oMpfVVfafqeoztqWQjyjYAtNU6s1DVk8e7VJB8A8gLAFOrGwDyWo440mUseWqq5zmWokefeVVteRzc4+4uKzxAPJNwB5LWCXa30cH9gfzCYQkeAWyEI8k3ACuCXazgu8lPBK2fBHkjgjyTAu1nAPkEcA+QWz4IRwQrgXazgO8kcFy2fBCjghJoLtXwTnoo4ZB5DHwW0MIUGAeSmC3YDXzMOWSPB9zlnUdbUPeGzSOe33pTAPJWwQhpyrFNklsY3AjIVgKojOFaCurJiVBKglRlAeCjKCUpKCtSEmVIKgfKYFIFKobKR5yFKUoMaZuViOh9YrYOGVXsWZi6wxWwhWNiHksgMTBqmIoEQ8kwjCvDUwarYlSIwmEYVuFICtkViNTsVoCMK2FewKdis2qcIKtiNitwjCCrYjYrcIwgq2qNqtIUIKtigsVuFBCCrYma3CbCnCCRyCYFKjKB8qCoyoJQSVBKjKgoKk2UilRTgqUg6pkRKCoCEBhRhShABSAhSgnClQpVApUBSglThQjKCUIQgEIQgEIKjKCVBCMqCgFClQgEIUIJUIUEoJJRlKhQSVCjKgkoK1K9G9xNJ+zls+majuJpP2ctn0zV5+xTpvB5zClejO4ulPZ22fTNR3F0r7PWz6ZqdinRg86AqV6K7jaV9nrZ9M1T3G0r7PW36ZqdinRg86IXovuPpX2ftv07UdyNK+z9t+nanYjRg86qV6J7kaV9n7b9O1HcjSvs/bvp2p2I0YS87oXojuRpb2ft307UdydLD/YFuH/TtTsRoweeFIXdamyaKppXRz2O3ta3dveaZu1pHXw96V9n0WyV8TrFRYjJa5/og2gjIIzjzBCdmNGEuGIXdTZdFbNzLHQvxjk2kGeg938TfmlntGiYWPebNbnBgy4ejDk3ON3w9/wAVezGjBwzmpXeptOaPgO2SyW8HaHkejDODkDw8cH5FLBYNF1MjmQ2e2kgFxPowxgdfD4/JOzGjBwdC7rXWDSNFu4mnaMgMa8FtK3DgXY5fDISCx6Wc4f6KUxaZGxg8CLmSM9M+RyR4YTsxowcMyhdwFm0oW7hpamLeGXk+jx8sHBBGfj8irJLFpGNgc/TlMAXvaP8A8gzlrC48veAU7MaMHC1BXoGi0ppWspmTx2CgDXZ607fA4V/crS/7ht307U7MaMJed1C9E9ytL/uG3fTtUdydLfuC3fTtU7MaMJed1GV6J7k6W/cFu+najuPpX2ftv07U7FOjB51QvRXcjSvs/bfp2o7kaV9n7b9O1OxTowl50KF6L7j6V9n7b9O1HcfSvs/bfpmp2KdGDzkVC9G9xtK+z1s+majuLpT2dtn0zU7FOjB9EhCF5HQIQhAIQhAIQhAIQhAKHeHxQhBiSW2hkMrpKWFxk/XJYDu+KqNpt4DgKOHHX9X4/wBT80IQO620TmkGliIb0G33AfkB8kv4XQcyaOAnqcsHPmhCBpbdRPwH00TsNwMt8B0H3VkNHTQyAxQRsLRyLW9P/soQgrnoqSqfxKinjkfsxlw8M5x9k7aSmDGgQRgN3YGOmeR+yEIKjbaLgiH0aPhuLTt2+LeY+RTi3Ue9r/Ro9zX8Rpx0fjGfjjkhCDIpmMjhZHGxrGNADWtGAB5K1CEAhCEAhCEAhCEAhCEAhCEH/9k="
                    alt=""
                    className="visited-image"
                  />
                </div>
                <div className="visited-desc">
                  {" "}
                  <h3>{name}</h3>
                  <p>Do you recommend this business?</p>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                  {value ? <span>{desc[value - 1]}</span> : null}
                </div>
                <span>
                  <MdClose
                    className="close-visited"
                    onClick={() => {
                      handleCloseSuggestion(id);
                    }}
                  />
                </span>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    serviceCategory: state.business.serviceCategory,
    serviceLocation: state.business.serviceLocation,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    setServiceCategory: (category) =>
      dispatch({ type: SET_SERVICE_CATEGORY, payload: { category: category } }),

    setIsServiceContainerOpen: (status) =>
      dispatch({
        type: SET_IS_SERVICE_CONTAINER_OPEN,
        payload: { status: status },
      }),
    setServiceLocation: (location) =>
      dispatch({ type: SET_SERVICE_LOCATION, payload: { location: location } }),

    setIsLocationContainerOpen: (status) =>
      dispatch({
        type: SET_IS_LOCATION_CONTAINER_OPEN,
        payload: { status: status },
      }),
    setBusinessSearched: (result) =>
      dispatch({ type: SET_BUSINESS_SEARCHED, payload: { result: result } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheReviewee);
