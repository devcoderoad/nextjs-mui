import { Box, Grid, Paper, TextField } from "@mui/material";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";
/* Components */
// import Chart from "@components/Chart/ReChart";

export default function Page() {
  return (
    <DashboardLayout>
      <Paper
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          minHeight: 240,
        }}
      >
        <Grid item xs={12} md={8} lg={12} xl={12}>
          <Box>
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
            <div>
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
            </div>
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
        </Grid>
      </Paper>
    </DashboardLayout>
  );
}