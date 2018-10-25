import unittest
import APICall

class TestAPI(unittest.TestCase):

    def test_carreras_url(self):
        result = APICall.testing_carreras_url()
        self.assertEqual(result, 200)

    def test_registro_url(self):
        result = APICall.testing_registro_url()
        self.assertEqual(result, 200)

    def test_login_url(self):
        result = APICall.testing_login_url()
        self.assertEqual(result, 200)

    def testing_news_url(self):
        result = APICall.testing_news_url()
        self.assertEqual(result, 200)
