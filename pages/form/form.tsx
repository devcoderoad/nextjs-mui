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
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
/* Layouts */
import DashboardLayout from '@layouts/DashboardLayout'
/* Libs */
// import { CircleFlag } from 'react-circle-flags'
import Flag from 'react-world-flags'
import countries from 'svg-country-flags/countries.json'

export default function Page() {
  // console.log(countries('us'))
  const [selected, setSelected] = React.useState('Andorra')

  // console.log({ selected })

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
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            id="form-registration"
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
              />
              <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
              />
              <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
              />
            </div>
          </Box>
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
          <h2>Check In</h2>
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
            display: 'flex',
            flexDirection: 'column',
            // minHeight: 240,
          }}
        >
          <Box
            component="form"
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
                  label="Full Name"
                  variant="standard"
                  margin="dense"
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.25 }} />
                <TextField
                  id="input-with-sx"
                  label="Email"
                  variant="standard"
                  margin="dense"
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.25 }} />
                <TextField
                  id="input-with-sx"
                  label="Phone"
                  variant="standard"
                  margin="dense"
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
                />
              </Box>
            </Box>
            <Box
              sx={{ marginBottom: '2rem', marginTop: '2rem' }}
              maxWidth={'sm'}
            >
              <Button size="large" variant="contained" fullWidth>
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
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
