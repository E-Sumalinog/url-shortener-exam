<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;
use App\Models\UrlModel;

class UrlController extends BaseController
{

    use ResponseTrait;

    public function shorten(){
        
        $url = $this->request->getPost('url');

        // Validate URL (You can use CodeIgniter's validation library)
        if (!filter_var($url, FILTER_VALIDATE_URL)) {
            return $this->failValidationError('Invalid URL');
        }

        // Generate short code (Example: Random alphanumeric code)
        $shortCode = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 6);
        $baseUrl = base_url();

        // Save the mapping between the short code and original URL in the database
        $model = new UrlModel();
        $model->insert([
            'original_url' => $url,
            'short_code' => $shortCode
        ]);

        $shortenedUrl = 'http://localhost:8080/' . $shortCode;

        return $this->respond(['shortened_url' => $shortenedUrl]);
    }

    public function redirectToOriginalUrl($segment)
    {
        $shortCode = $segment;
        $model = new UrlModel();
        
        // Retrieve the original URL corresponding to the short code
        $urlExists = $model->select('original_url')->where('short_code', $shortCode)->first();

        if (!empty($urlExists)) {
            return redirect()->to($urlExists['original_url']);
        } else {
            echo json_encode([
                'status' => false,
                'message' => 'URL not found.'
            ]);
        }
    }
}
