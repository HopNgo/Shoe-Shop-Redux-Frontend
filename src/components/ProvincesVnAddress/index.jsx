import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Row } from "reactstrap";
import provinces from "../../constants/provinces";
import { changeAddressAction } from "../../redux/user/userSlice";
import "./ProvincesVnAddress.scss";

const ProvincesVnAddress = ({ setShowChangeAddress }) => {
  const dispatch = useDispatch();
  const [addressVN, setAddressVN] = useState({
    provinces: [],
    districts: [],
    wards: [],
    selectedProvinces: "",
    selectedDistricts: "",
    selectedWards: "",
  });
  const isDisableBtnSubmitAddress = !(
    addressVN.selectedProvinces.length > 0 &&
    addressVN.selectedDistricts.length > 0 &&
    addressVN.selectedWards.length > 0
  );

  const handleSubmitAddress = () => {
    if (
      addressVN.selectedProvinces.length > 0 &&
      addressVN.selectedDistricts.length > 0 &&
      addressVN.selectedWards.length > 0
    ) {
      dispatch(
        changeAddressAction({
          address: {
            province: addressVN.selectedProvinces,
            district: addressVN.selectedDistricts,
            ward: addressVN.selectedWards,
          },
        })
      );
      setShowChangeAddress(false);
    }
  };

  console.log(addressVN);

  useEffect(() => {
    setAddressVN({
      ...addressVN,
      provinces: provinces,
    });
  }, []);

  const changeProvinces = (event) => {
    console.log(event.target.value);
    setAddressVN({
      ...addressVN,
      selectedProvinces: event.target.value,
      districts: addressVN.provinces.find(
        (province) => province.name === event.target.value
      ).districts,
      wards: [],
      selectedDistricts: "",
      selectedWards: "",
    });
  };
  const changeDistricts = (event) => {
    setAddressVN({
      ...addressVN,
      selectedDistricts: event.target.value,
      wards: addressVN.districts.find(
        (district) => district.name === event.target.value
      ).wards,
      selectedWards: "",
    });
  };
  const changeWards = (event) => {
    setAddressVN({
      ...addressVN,
      selectedWards: event.target.value,
    });
  };
  return (
    <>
      <Row className="form-group mb-2">
        <select
          className="form-select fs-5"
          name="provinces"
          placeholder="Provinces"
          value={addressVN.selectedProvinces}
          onChange={changeProvinces}
        >
          <option value="">chọn thành phố, tỉnh</option>
          {addressVN.provinces.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e.name}
              </option>
            );
          })}
        </select>
      </Row>

      <Row className="form-group mb-2">
        <select
          className="form-select fs-5"
          placeholder="State"
          name="district"
          value={addressVN.selectedDistricts}
          onChange={changeDistricts}
        >
          <option value="">chọn quận, huyện </option>
          {addressVN.districts.length > 0 &&
            addressVN.districts.map((e, key) => {
              return (
                <option value={e.name} key={key}>
                  {e.name}
                </option>
              );
            })}
        </select>
      </Row>

      <Row className="form-group mb-2">
        <select
          className="form-select fs-5"
          placeholder="City"
          value={addressVN.selectedWards}
          onChange={changeWards}
        >
          <option value="">chọn phường xã</option>

          {addressVN.wards.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e.name}
              </option>
            );
          })}
        </select>
      </Row>
      <Row className="d-flex justify-content-center">
        <button
          disabled={isDisableBtnSubmitAddress}
          onClick={handleSubmitAddress}
          type="submit"
          className="btn bg-success text-white fs-5 w-50"
        >
          Cập nhật
        </button>
      </Row>
    </>
  );
};

export default React.memo(ProvincesVnAddress);
