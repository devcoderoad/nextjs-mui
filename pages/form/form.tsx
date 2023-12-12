import React from 'react'
/* MUI */
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AccountCircle from '@mui/icons-material/AccountCircle'
import EmailIcon from '@mui/icons-material/Email'
import MapIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import {
  Autocomplete,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material'
/* Layouts */
import DashboardLayout from '@layouts/DashboardLayout'
/* Libs */
import Flag from 'react-world-flags'
import countries from 'svg-country-flags/countries.json'

/* form states */
const initialValue = {
  username: '',
  email: '',
  phone: '',
  address: '',
}

type Action =
  | { type: 'username'; payload: string }
  | { type: 'email'; payload: string }
  | { type: 'phone'; payload: string }
  | { type: 'address'; payload: string }
  | { type?: 'reset' }

const reducer = (state: typeof initialValue, action: Action) => {
  switch (action.type) {
    case 'username':
      return { ...state, username: action.payload }
    case 'email':
      return { ...state, email: action.payload }
    case 'phone':
      return { ...state, phone: action.payload }
    case 'address':
      return { ...state, address: action.payload }
    case 'reset':
      return initialValue
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

export default function Page() {
  const [selected, setSelected] = React.useState('Andorra')
  const [state, dispatch] = React.useReducer(reducer, initialValue)

  return (
    <DashboardLayout>
      <React.Fragment>
        <Paper
          sx={{
            p: 4,
            marginY: 4,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 240,
          }}
        >
          <h2>Registration</h2>
          <Grid container spacing={[0, 2]} gap={[1, 2]} columns={12}>
            <Grid
              item
              component="form"
              xl={3}
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                button: {
                  marginRight: '.5rem',
                },
              }}
              id="form-settings"
              noValidate
              autoComplete="off"
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <AccountCircle
                    sx={{ color: 'action.active', mr: 1, my: 0.25 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Username"
                    variant="standard"
                    margin="dense"
                    size="small"
                    defaultValue={state.username}
                    value={state.username}
                    onChange={(event) =>
                      dispatch({
                        type: 'username',
                        payload: event.target.value,
                      })
                    }
                    helperText="your username to sign in"
                    required
                  />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.25 }} />
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    variant="standard"
                    margin="dense"
                    size="small"
                    defaultValue={state.email}
                    value={state.email}
                    onChange={(event) =>
                      dispatch({
                        type: 'email',
                        payload: event.target.value,
                      })
                    }
                  />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.25 }} />
                  <TextField
                    id="input-with-sx"
                    label="Phone"
                    variant="standard"
                    margin="dense"
                    size="small"
                    defaultValue={state.phone}
                    value={state.phone}
                    onChange={(event) =>
                      dispatch({
                        type: 'phone',
                        payload: event.target.value,
                      })
                    }
                  />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <MapIcon sx={{ color: 'action.active', mr: 1, my: 0.25 }} />
                  <TextField
                    id="input-with-sx"
                    label="Address"
                    variant="standard"
                    margin="dense"
                    multiline
                    maxRows={3}
                    size="small"
                    defaultValue={state.address}
                    value={state.address}
                    onChange={(event) =>
                      dispatch({
                        type: 'address',
                        payload: event.target.value,
                      })
                    }
                  />
                </Box>
              </Box>
              <Box sx={{ marginBottom: '2rem', marginTop: '2rem' }}>
                <Button size="large" variant="contained" fullWidth>
                  Submit
                </Button>
              </Box>
            </Grid>
            <Grid item xl={5}>
              <Box
                component="fieldset"
                sx={{ borderColor: '#f2f2f2' }}
                px={3}
                pt={3}
              >
                <Typography
                  component={'legend'}
                  variant="h5"
                  color={'secondary'}
                  aria-label="registration-result"
                >
                  Your Registration Confirmation
                </Typography>
                <Typography variant="body1" color="secondary">
                  Username:
                </Typography>
                {state.username}
                <hr />
                <Typography variant="body1" color="secondary">
                  Email:
                </Typography>
                {state.email}
                <hr />
                <Typography variant="body1" color="secondary">
                  Phone:
                </Typography>
                {state.phone}
                <hr />
                <Typography variant="body1" color="secondary">
                  Address:
                </Typography>
                {state.address}
                <hr />
                <Stack
                  sx={{ marginBottom: '2rem', marginTop: '2rem' }}
                  direction={'row'}
                  gap={2}
                >
                  <Button size="large" variant="outlined" fullWidth>
                    Confirm
                  </Button>
                  <Button
                    size="large"
                    variant="outlined"
                    fullWidth
                    color="error"
                    onClick={() =>
                      dispatch({
                        type: 'reset',
                      })
                    }
                  >
                    Reset
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <h2>Settings</h2>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            id="form-settings"
            noValidate
            autoComplete="off"
          >
            <div>
              {/* <h2>Settings</h2>
            <form id="settings"> */}
              <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Hello World"
                variant="filled"
              />
              <TextField
                disabled
                id="filled-disabled"
                label="Disabled"
                defaultValue="Hello World"
                variant="filled"
              />
              <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
              <TextField
                id="filled-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
              <TextField
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
              />
              <TextField
                id="filled-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
                variant="filled"
              />
              {/* </form> */}
            </div>
          </Box>
          <h2>Disabled</h2>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            id="form-check-in"
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="standard-required"
                label="Required"
                defaultValue="Hello World"
                variant="standard"
              />
              <TextField
                disabled
                id="standard-disabled"
                label="Disabled"
                defaultValue="Hello World"
                variant="standard"
              />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
              />
              <TextField
                id="standard-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
                variant="standard"
              />
            </div>
          </Box>
        </Paper>
        <Paper
          sx={{
            p: 4,
          }}
        ></Paper>
        <Paper
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            // minHeight: 240,
          }}
        >
          <FormControl fullWidth sx={{ width: 480, marginY: 2 }}>
            <InputLabel id="simple-select-label">Country</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={selected}
              label="Country"
              onChange={(e) => setSelected(String(e.target.value))}
            >
              {Object.entries(countries).map((countryCode) => {
                return (
                  <MenuItem value={countryCode[1]} key={`${countryCode[0]}`}>
                    <IconButton
                      sx={{
                        overflow: 'hidden',
                        borderRadius: '100%',
                        width: 25,
                        height: 25,
                        textAlign: 'center',
                        marginRight: '.75rem',
                        boxShadow: 'var(--drop-shadow-light)',
                      }}
                      size="small"
                    >
                      <Flag
                        code={`${countryCode[0]}`}
                        height={25}
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
                      />
                    </IconButton>
                    {countryCode[1]}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ width: 480, marginY: 2 }}>
            <InputLabel id="simple-select-fieldset">Fieldset</InputLabel>
            <TextField
              // labelId="simple-select-fieldset"
              name="Fullname"
              // placeholder="Fullname"
              aria-labelledby="simple-select-fieldset"
            />
            {/* <form>
              <InputLabel>
                Fullname
              </InputLabel>
              <InputLabel>
                Address
                <TextField name="Address" placeholder="Address" />
              </InputLabel>
              <Button variant="contained" size="large">
                Submit
              </Button>
            </form> */}
          </FormControl>
          <Autocomplete
            disablePortal
            // freeSolo
            value={Object.entries(countries)
              .map((countryCode) => ({
                label: countryCode[1],
                id: countryCode[0],
              }))
              .find((item) => item.label === selected)}
            id="combo-box-demo"
            options={Object.entries(countries).map((countryCode) => ({
              label: countryCode[1],
              id: countryCode[0],
            }))}
            sx={{ width: 480, marginY: 2 }}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <IconButton
                  sx={{
                    overflow: 'hidden',
                    borderRadius: '100%',
                    width: 25,
                    height: 25,
                    textAlign: 'center',
                    marginRight: '.75rem',
                    boxShadow: 'var(--drop-shadow-light)',
                  }}
                  size="small"
                >
                  <Flag
                    code={option.id}
                    height={25}
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                  />
                </IconButton>
                {option.label} {/* ({option.id}) */}
              </Box>
            )}
            renderInput={(params) => <TextField {...params} label="Country" />}
          />
          <Button variant="contained" size="large" sx={{ width: 480 }}>
            Submit
          </Button>
          <form style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <fieldset>
              <legend>Choose your favorite monster</legend>

              <input type="radio" id="kraken" name="monster" value="K" />
              <label htmlFor="kraken">Kraken</label>
              <br />

              <input type="radio" id="sasquatch" name="monster" value="S" />
              <label htmlFor="sasquatch">Sasquatch</label>
              <br />

              <input type="radio" id="mothman" name="monster" value="M" />
              <label htmlFor="mothman">Mothman</label>
            </fieldset>
          </form>
        </Paper>
      </React.Fragment>
    </DashboardLayout>
  )
}
