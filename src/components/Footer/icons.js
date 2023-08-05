import styled from 'styled-components'
import {
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaHome,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa'

export const Home = styled(FaHome)`
  margin-right: 10px;
`
export const Phone = styled(FaPhoneAlt)`
  margin-right: 10px;
`
export const Marker = styled(FaMapMarkerAlt)`
  margin-right: 10px;
`
export const Google = styled(FaGoogle)`
  transition: all 450ms ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
    color: #d9d9d9;
  }
  @media screen and (max-width: 768px) {
    &:hover {
      transform: none;
      color: #231f20;
    }
  }
`
export const Facebook = styled(FaFacebook)`
  transition: all 450ms ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
    color: #d9d9d9;
  }
  @media screen and (max-width: 768px) {
    &:hover {
      transform: none;
      color: #231f20;
    }
  }
`
export const Instagram = styled(FaInstagram)`
  transition: all 450ms ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
    color: #d9d9d9;
  }
  @media screen and (max-width: 768px) {
    &:hover {
      transform: none;
      color: #231f20;
    }
  }
`
