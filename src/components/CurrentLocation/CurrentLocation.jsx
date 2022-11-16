import { MarkerF } from '@react-google-maps/api';
// import cl from './currentLocation.module.scss';

export const CurrentLocation = ({ position }) => {
  return (
    <MarkerF
      position={position}
      icon={{ url: "/location.svg" }}
    />
  )
}