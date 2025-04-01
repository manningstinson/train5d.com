import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import logging

# Email configuration
EMAIL_HOST = os.getenv("EMAIL_HOST", "smtp.gmail.com")
EMAIL_PORT = int(os.getenv("EMAIL_PORT", 587))
EMAIL_USER = os.getenv("EMAIL_USER", "")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD", "")
EMAIL_FROM = os.getenv("EMAIL_FROM", "noreply@example.com")
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000")

logger = logging.getLogger(__name__)

async def send_email(to_email: str, subject: str, html_content: str):
    """
    Send an email using SMTP
    """
    try:
        # Create message
        message = MIMEMultipart("alternative")
        message["Subject"] = subject
        message["From"] = EMAIL_FROM
        message["To"] = to_email

        # Create HTML part
        html_part = MIMEText(html_content, "html")
        message.attach(html_part)

        # Connect to SMTP server and send email
        with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
            server.starttls()
            if EMAIL_USER and EMAIL_PASSWORD:
                server.login(EMAIL_USER, EMAIL_PASSWORD)
            server.sendmail(EMAIL_FROM, to_email, message.as_string())
            
        logger.info(f"Email sent to {to_email}")
        return True
    except Exception as e:
        logger.error(f"Error sending email to {to_email}: {str(e)}")
        return False

async def send_verification_email(to_email: str, token: str):
    """
    Send an email verification link
    """
    verification_url = f"{FRONTEND_URL}/verify-email/{token}"
    
    html_content = f"""
    <html>
    <body>
        <h1>Verify Your Email Address</h1>
        <p>Thank you for registering. Please click the link below to verify your email address:</p>
        <p><a href="{verification_url}">Verify Email</a></p>
        <p>If you did not create an account, you can safely ignore this email.</p>
    </body>
    </html>
    """
    
    return await send_email(
        to_email=to_email,
        subject="Verify Your Email Address",
        html_content=html_content
    )

async def send_password_reset_email(to_email: str, token: str):
    """
    Send a password reset link
    """
    reset_url = f"{FRONTEND_URL}/reset-password/{token}"
    
    html_content = f"""
    <html>
    <body>
        <h1>Reset Your Password</h1>
        <p>You are receiving this email because you (or someone else) requested a password reset.</p>
        <p>Please click the link below to reset your password:</p>
        <p><a href="{reset_url}">Reset Password</a></p>
        <p>If you did not request this, you can safely ignore this email.</p>
    </body>
    </html>
    """
    
    return await send_email(
        to_email=to_email,
        subject="Reset Your Password",
        html_content=html_content
    )