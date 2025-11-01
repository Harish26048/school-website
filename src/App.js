import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Link as MuiLink,
  TextField,
  Paper,
  Alert,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// ================= NAVBAR =================
function Navbar() {
  return (
    <AppBar position="static" color="primary" sx={{ mb: 4 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Sunrise School
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/academics">Academics</Button>
          <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
          <Button color="inherit" component={Link} to="/events">Events</Button>
          <Button color="inherit" component={Link} to="/faculty">Faculty</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// ================= FOOTER =================
function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 4, mt: 6 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Sunrise School
            </Typography>
            <Typography variant="body2">
              123 Education Road, Coimbatore, Tamil Nadu, India
            </Typography>
            <Typography variant="body2">Phone: +91 98765 43210</Typography>
            <Typography variant="body2">Email: info@sunriseschool.edu.in</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <MuiLink component={Link} to="/" color="inherit" underline="hover">Home</MuiLink>
              <MuiLink component={Link} to="/academics" color="inherit" underline="hover">Academics</MuiLink>
              <MuiLink component={Link} to="/gallery" color="inherit" underline="hover">Gallery</MuiLink>
              <MuiLink component={Link} to="/events" color="inherit" underline="hover">Events</MuiLink>
              <MuiLink component={Link} to="/faculty" color="inherit" underline="hover">Faculty</MuiLink>
              <MuiLink component={Link} to="/contact" color="inherit" underline="hover">Contact</MuiLink>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Typography variant="body2">Instagram | Facebook | Twitter</Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            mt: 3,
            pt: 2,
          }}
        >
          <Typography variant="body2">
            © 2025 Sunrise School | All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

// ================= HOME PAGE =================
function Home() {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/cambus.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Welcome to Sunrise School
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: 700 }}>
        A place of excellence, innovation, and learning for a brighter tomorrow.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ mt: 3, borderRadius: 3 }}
        component={Link}
        to="/gallery"
      >
        Explore Our Campus
      </Button>
    </Box>
  );
}

// ================= ACADEMICS PAGE =================
function Academics() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Academics
      </Typography>
      <Typography variant="body1" color="text.secondary">
        At Sunrise School, we believe that education is the foundation of lifelong success.
        Our academic programs are designed to nurture intellectual curiosity, critical thinking,
        and creativity in every student. With a well-structured curriculum, experienced faculty,
        and a supportive learning environment, we ensure that each child reaches their fullest potential.
        We offer a balanced blend of academics, co-curricular, and extracurricular activities that
        encourage holistic development and prepare our students to excel in all aspects of life.
      </Typography>
    </Container>
  );
}

// ================= GALLERY PAGE =================
function Gallery() {
  const images = ["/campus1.jpg", "/campus2.jpg", "/campus3.jpeg", "/campus4.jpg"];
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Gallery
      </Typography>
      <Grid container spacing={3}>
        {images.map((src, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              elevation={4}
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia component="img" height="200" image={src} alt={`Campus ${i + 1}`} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

// ================= EVENTS PAGE =================
function Events() {
  const events = [
    {
      title: "Annual Sports Day",
      description: "A celebration of talent, teamwork, and sportsmanship.",
      image: "/event1.jpg",
    },
    {
      title: "Science Exhibition",
      description: "Showcasing the innovation and creativity of our students.",
      image: "/event2.jpg",
    },
  ];
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        School Events
      </Typography>
      <Grid container spacing={3}>
        {events.map((event, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Card elevation={5}>
              <CardMedia component="img" height="250" image={event.image} alt={event.title} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{event.title}</Typography>
                <Typography variant="body2" color="text.secondary">{event.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

// ================= FACULTY PAGE =================
function Faculty() {
  const faculty = [
    { name: "Prof. John Doe", subject: "Senior Lecturer - Mathematics", image: "/faculty1.jpg" },
    { name: "Prof. Arthur", subject: "Senior Lecturer - Science", image: "/faculty2.jpg" },
    { name: "Prof. Charles", subject: "Senior Lecturer - English", image: "/faculty3.jpg" },
    { name: "Prof. Edward", subject: "Senior Lecturer - Computer Science", image: "/faculty4.jpg" },
  ];
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>Our Faculty</Typography>
      <Grid container spacing={3}>
        {faculty.map((prof, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              elevation={4}
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia component="img" height="250" image={prof.image} alt={prof.name} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{prof.name}</Typography>
                <Typography variant="body2" color="text.secondary">{prof.subject}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

// ================= CONTACT PAGE =================
function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateField = (name, value) => {
    let tempErrors = { ...errors };
    switch (name) {
      case "name":
        tempErrors.name = value.trim() ? "" : "Name is required";
        break;
      case "email":
        if (!value) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) tempErrors.email = "Invalid email address";
        else tempErrors.email = "";
        break;
      case "phone":
        if (!value) tempErrors.phone = "Phone number is required";
        else if (!/^\d{10}$/.test(value)) tempErrors.phone = "Phone number must be 10 digits";
        else tempErrors.phone = "";
        break;
      case "message":
        tempErrors.message = value.trim() ? "" : "Message is required";
        break;
      default:
        break;
    }
    setErrors(tempErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let allValid = true;
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (!formData[field]) allValid = false;
    });

    if (Object.values(errors).some((err) => err)) allValid = false;

    if (allValid) {
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setSuccess(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            ✅ Your message has been sent successfully!
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            label="Phone Number"
            name="phone"
            fullWidth
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            error={Boolean(errors.phone)}
            helperText={errors.phone}
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            fullWidth
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            error={Boolean(errors.message)}
            helperText={errors.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1.2, borderRadius: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

// ================= MAIN APP =================
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
