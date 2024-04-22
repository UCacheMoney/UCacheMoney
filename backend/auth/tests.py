from django.test import TestCase
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User

# Create your tests here.


class PasswordValidationTestCase(TestCase):
    def test_user_attribute_similarity_validator(self):
        invalid_password = "password123"  # Too similar to user attributes
        with self.assertRaises(ValidationError):
            validate_password(invalid_password)

    def test_minimum_length_validator(self):
        invalid_password = "weak"  # Too short
        with self.assertRaises(ValidationError):
            validate_password(invalid_password)

    def test_common_password_validator(self):
        invalid_password = "CommonPassword"  # Common password
        with self.assertRaises(ValidationError):
            validate_password(invalid_password)

    def test_numeric_password_validator(self):
        invalid_password = "123456789"  # Numeric password
        with self.assertRaises(ValidationError):
            validate_password(invalid_password)


class UserCreationTestCase(TestCase):
    def test_user_creation(self):
        # Test data
        email = "test@example.com"
        username = "testuser"
        password = "testpassword"

        # Create user
        user = User.objects.create_user(
            email=email, username=username, password=password
        )

        # Check if user is created successfully
        self.assertIsNotNone(user)
        self.assertEqual(user.email, email)
        self.assertEqual(user.username, username)

        # Check if password is set correctly
        self.assertTrue(user.check_password(password))

    def test_blank_username(self):
        # Test data
        email = "test@example.com"
        password = "testpassword"

        # Try to create user with blank username
        with self.assertRaises(ValueError):
            User.objects.create_user(email=email, username="", password=password)

    def test_blank_email(self):
        # Test data
        username = "testuser"
        password = "testpassword"

        # Try to create user with blank email
        with self.assertRaises(ValueError):
            User.objects.create_user(email="", username=username, password=password)

    def test_blank_password(self):
        # Test data
        email = "test@example.com"
        username = "testuser"

        # Try to create user with blank password
        with self.assertRaises(ValueError):
            User.objects.create_user(email=email, username=username, password="")
