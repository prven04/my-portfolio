"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="contact-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        style={{
          padding: "30px 10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "1320px",
          color: "#fff",
          border: "none",
          borderRadius: 0,
          boxShadow: "none",
          backdropFilter: "blur(12px)",
        }}
        className="contact-main-content w-full max-w-5xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <img
          className="contact-profile-img"
          src="my_pic_2.jpg"
          alt="Profile"
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1.5rem",
            border: "3px solid #fff",
            boxShadow: "0 4px 16px rgba(59,130,246,0.15)",
          }}
        />
        <motion.h3
          className="contact-title"
          style={{
            fontSize: "1.7rem",
            fontWeight: 700,
            marginBottom: "1rem",
            textAlign: "center",
            letterSpacing: "0.01em",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Interested in hiring me for your project?
        </motion.h3>
        <motion.div
          className="contact-intro"
          style={{
            fontSize: "1.08rem",
            marginBottom: "2rem",
            textAlign: "center",
            lineHeight: 1.7,
            paddingLeft: "200px",
            paddingRight: "200px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <style>
            {`
              @media (max-width: 600px) {
            .contact-intro {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
              }
            `}
          </style>
          Looking for a skilled front-end developer to create stunning,
          responsive user interfaces or enhance your web application's user
          experience? To start a conversation, just drop me an email at{" "}
          <a
            className="contact-link"
            href="mailto:prven04@gmail.com"
            style={{
              color: "rgba(0, 0, 0, 0.5)",
              textDecoration: "underline",
              fontWeight: 500,
              wordBreak: "break-all",
            }}
          >
            prven04@gmail.com
          </a>
        </motion.div>
        <motion.div
          className="contact-btn-wrapper"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            className="contact-btn"
            href="#"
            style={{
              background: "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)",
              color: "#fff",
              padding: "0.75rem 2.5rem",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "1.05rem",
              textDecoration: "none",
              transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
              boxShadow: "0 2px 12px rgba(59,130,246,0.15)",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #1d4ed8 0%, #3b82f6 100%)";
              e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(59,130,246,0.22)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 2px 12px rgba(59,130,246,0.15)";
            }}
          >
            Let's Talk
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
