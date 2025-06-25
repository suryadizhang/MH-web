# import pytest
# from unittest.mock import patch

# @pytest.fixture(autouse=True)
# def patch_send_email(monkeypatch):
#     from app import email_utils
#     monkeypatch.setattr(email_utils, "send_email", lambda *args, **kwargs: None)
#     monkeypatch.setattr(email_utils, "send_booking_email", lambda *args, **kwargs: None)
#     monkeypatch.setattr(email_utils, "send_customer_confirmation", lambda *args, **kwargs: None)
#     monkeypatch.setattr(email_utils, "send_waitlist_confirmation", lambda *args, **kwargs: None)
#     monkeypatch.setattr(email_utils, "send_cancellation_email", lambda *args, **kwargs: None)
#     monkeypatch.setattr(email_utils, "send_waitlist_slot_opened", lambda *args, **kwargs: None)

# def pytest_sessionstart(session):
#     import sys
#     from unittest.mock import patch
#     # Patch all email sending functions before any test imports the app
#     patchers = [
#         patch("app.email_utils.send_email", lambda *a, **k: None),
#         patch("app.email_utils.send_booking_email", lambda *a, **k: None),
#         patch("app.email_utils.send_customer_confirmation", lambda *a, **k: None),
#         patch("app.email_utils.send_waitlist_confirmation", lambda *a, **k: None),
#         patch("app.email_utils.send_cancellation_email", lambda *a, **k: None),
#         patch("app.email_utils.send_waitlist_slot_opened", lambda *a, **k: None),
#     ]
#     for p in patchers:
#         p.start()