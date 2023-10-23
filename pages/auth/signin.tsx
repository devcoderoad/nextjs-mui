import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
// import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme } from '@mui/material/styles'

import { constant } from '@config/constants'
import Copyright from '@components/Copyright'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const theme = createTheme()

export default function Page() {
  const router = useRouter()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const isLogin = await signIn('credentials', {
      email: data.get('email'),
      password: data.get('password'),
      redirect: false,
    })
    if (isLogin?.status === 401 && isLogin?.error) {
      // setMessage(isLogin.error);
      console.log(isLogin?.error)
    } else {
      window.location.href = `${router?.query?.callbackUrl ?? '/dashboard'}`
    }
  }

  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            flex="column"
            sx={{
              height: '100vh',
              display: 'flex',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                my: 8,
                mx: 4,
              }}
            >
              <Alert sx={{ mb: 4 }}>
                To use this template demo, Please login using the Account
                provided below.
              </Alert>
              <Link
                href="/"
                sx={{
                  transition: 'all .5s ease',
                  verticalAlign: 'middle',
                  mx: 'auto',
                  mb: 2,
                  ':hover': {
                    filter: 'brightness(1.35);',
                  },
                }}
              >
                <img
                  src="/logo.svg"
                  alt={constant.siteName}
                  height={24}
                  style={{ verticalAlign: 'middle' }}
                />
              </Link>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  size="small"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value="admin@admin.org"
                  autoFocus
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  size="small"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value="password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      Don&apos;t have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </>
  )
}
