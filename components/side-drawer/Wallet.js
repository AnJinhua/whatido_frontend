import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack } from '@mui/system';
import { lazy, Suspense, useContext } from 'react';

import { TransactionContext } from '../../context/TransactionContext';
const WalletSideDrawer = lazy(() => import('./WalletSideDrawer'));

const Wallet = () => {
  const { toggleSideDrawer, setToggleSideDrawer } =
    useContext(TransactionContext);

  const largeScreen = useMediaQuery('(min-width:640px)');

  return (
    <>
      <Drawer
        transitionDuration={0}
        style={{
          zIndex: 888,
          backgroundColor: 'rgba(0,0,0,.1)',
        }}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={
          largeScreen
            ? {
                sx: {
                  width: 425,
                  boxSizing: 'border-box',
                  top: '4rem',
                },
              }
            : {
                sx: {
                  width: '100%',
                  boxSizing: 'border-box',
                  top: '4rem',
                },
              }
        }
        variant="temporary"
        anchor="right"
        open={toggleSideDrawer}
        onClose={() => setToggleSideDrawer(true)}
      >
        <Stack className="wallet-option">
          <Suspense fallback={<div>loading...</div>}>
            <WalletSideDrawer />
          </Suspense>
        </Stack>
      </Drawer>
    </>
  );
};

export default Wallet;
