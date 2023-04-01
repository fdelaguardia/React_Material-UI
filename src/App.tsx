
import './App.css';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { MuiNavbar } from './components/MuiNavbar';
import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiRating } from './components/MuiRating';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiLayout } from './components/MuiLayout';
import { MuiCard } from './components/MuiCard';
import { MuiAccordion } from './components/MuiAccordion';
import { MuiImageList } from './components/MuiImageList';
import { MuiLink } from './components/MuiLink';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiSpeedDial } from './components/MuiSpeedDial';
import { MuiBottomNav } from './components/MuiBottomNav';
import { MuiAvatar } from './components/MuiAvatar';
import { MuiBadge } from './components/MuiBadge';
import { MuiList } from './components/MuiList';
import { MuiChip } from './components/MuiChip';
import { MuiTooltip } from './components/MuiTooltip';
import { MuiTable } from './components/MuiTable';
import { MuiAlert } from './components/MuiAlert';
import { MuiSnackbar } from './components/MuiSnackbar';
import { MuiDialog } from './components/MuiDialog';
import { MuiProgress } from './components/Muiprogress';
import { MuiSkeleton } from './components/MuiSkeleton';
import { MuiLoadingButton } from './components/MuiLoadingButton';
import { MuiPicker } from './components/MuiPicker';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <div className="App">
        <MuiNavbar/>
        <MuiTypography/>
        <MuiButton/>
        <MuiTextField/>
        <MuiSelect/>
        <MuiRadioButton/>
        <MuiCheckbox/>
        <MuiSwitch/>
        <MuiRating/>
        <MuiAutocomplete/>
        <MuiLayout/>
        <MuiCard/>
        <MuiAccordion/>
        <MuiImageList/>
        <MuiLink/>
        <MuiDrawer/>
        <MuiSpeedDial/>
        <MuiAvatar/>
        <MuiBadge/>
        <MuiList/>
        <MuiChip/>
        <MuiTooltip/>
        <MuiTable/>
        <MuiAlert/>
        <MuiSnackbar/>
        <MuiDialog/>
        <MuiProgress />
        <MuiSkeleton/>
        <MuiLoadingButton/>
        <MuiPicker/>
        <MuiBottomNav/>
      </div>
    </LocalizationProvider>
  );
}

export default App;
