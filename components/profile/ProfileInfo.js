import * as coordinateToCountry from 'coordinate_to_country';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import {
  setAuthState,
  setToken,
  setUser,
} from '../../store/reducers/auth_reducer';
import { ProfileInfoContainer } from '../../styles/profile.styles';
import BigAvatar from '../utils/avatars/BigAvatar';
import ClickAwayOption from '../utils/surface/ClickAwayOption';
import { TextSm, TextXL } from '../utils/typography/Typography';
import ProfileActionButton from './ProfileActionButton';

function ProfileInfo({ userSlug }) {
  const [openOption, setOpenOption] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.currentUser);
  const slug = router?.query?.id;
  const authenticated = useSelector((state) => state.auth.authenticated);
  const myProfile = currentUser?.slug === slug;

  const { data } = useSWR(`${API_URL}/getExpertDetail/${userSlug}`, {
    suspense: true,
  });
  const user = data?.data;
  const { data: followers } = useSWR(`${API_URL}/follwers/${user?.slug}`);
  const { data: followings } = useSWR(`${API_URL}/following/${user?.slug}`);

  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }

  const handleClick = () => {
    setOpenOption((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpenOption(false);
  };

  const logOut = () => {
    router.push('/');

    dispatch(setAuthState(false));
    dispatch(setUser({}));
    dispatch(setToken(null));
  };

  const profileOptions = myProfile
    ? [
        {
          name: 'share profile',
          eventHandler: () => console.log('clicked me'),
        },
        {
          name: 'saved',
          eventHandler: () => console.log('clicked me'),
        },
        {
          name: 'setting',
          eventHandler: () => router.push(`settings/${user?.slug}`),
          //eventHandler: () => console.log('clicked me'),
        },

        {
          name: 'log out',
          eventHandler: logOut,
        },
      ]
    : [
        {
          name: 'share profile',
          eventHandler: () => console.log('clicked me'),
        },
        {
          name: 'block',
          eventHandler: () => console.log('clicked me'),
        },
        {
          name: 'report',
          eventHandler: () => console.log('clicked me'),
        },
        {
          name: 'contact info',
          eventHandler: () => console.log('clicked me'),
        },
      ];

  const expertCountry = coordinateToCountry(
    user?.locationLat,
    user?.locationLng,
    true
  );

  return (
    <ProfileInfoContainer>
      <div
        className="banner-conatiner"
        style={{
          backgroundImage: `url(${user?.coverImage?.cdnUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          padding: '0.5rem 1rem',
        }}
      >
        {authenticated && (
          <ClickAwayOption
            handleClickAway={handleClickAway}
            handleClick={handleClick}
            openOption={openOption}
            options={profileOptions}
          />
        )}
      </div>
      <div className="info-conatiner">
        <BigAvatar src={user?.imageUrl?.cdnUrl} />
        <div className="info-name-container">
          <div className="info-name-wrapper">
            <div className="info">
              <TextXL>
                {user?.profile?.firstName + ' ' + user?.profile?.lastName}
              </TextXL>
            </div>
            {expertCountry?.length > 0 && <div className="ellipse" />}
            <ReactCountryFlag
              countryCode={expertCountry[0]}
              style={{
                fontSize: '2em',
                lineHeight: '2em',
                borderRadius: '0.5rem',
              }}
              aria-label={expertCountry[0]}
              svg
              cdnSuffix="svg"
            />
          </div>
          <ProfileActionButton />
        </div>

        <div className="info">
          <TextSm>{user?.userBio}</TextSm>
        </div>

        <div className="info">
          <TextSm style={{ fontWeight: 600 }}>{user?.community?.label}</TextSm>
        </div>

        <div className="category-container">
          {user?.experties?.map(({ label, value }, i) => (
            <div className="category" key={value + i}>
              <TextSm>{label}</TextSm>
            </div>
          ))}
        </div>

        <div className="follow-container">
          <div className="follow-content">
            <div className="count-container">
              <TextSm>{numFormatter(followers?.length)}</TextSm>
            </div>
            <TextSm>followers</TextSm>
          </div>
          <div className="follow-content">
            <div className="count-container">
              <TextSm>{numFormatter(followings?.length)}</TextSm>
            </div>
            <TextSm>following</TextSm>
          </div>
        </div>
      </div>
    </ProfileInfoContainer>
  );
}

export default ProfileInfo;
