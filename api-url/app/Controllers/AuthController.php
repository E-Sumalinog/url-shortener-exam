<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Controller;
use App\Models\UserModel;

class AuthController extends Controller
{
    use ResponseTrait;

    public function signUp()
    {
        $userModel = new UserModel();
    
        try {
            // Get POST data
            $userData = $this->request->getJSON();
    
            // Validate required fields
            if (!isset($userData->name) || !isset($userData->email) || !isset($userData->password)) {
                throw new Exception('Missing required fields');
            }
    
            // Hash the password
            $hashedPassword = password_hash($userData->password, PASSWORD_DEFAULT);
    
            // Prepare user data
            $userDataToInsert = [
                'name' => $userData->name,
                'email' => $userData->email,
                'password' => $hashedPassword
            ];
    
            // Insert user into database
            $userModel->insert($userDataToInsert);
    
            return $this->respondCreated(['message' => 'User created successfully']);
        } catch (Exception $e) {
            // Log or handle the exception
            return $this->failServerError('Error creating user: ' . $e->getMessage());
        }
    }

    public function signIn()
    {
        $userModel = new UserModel();
    
        try {
            // Retrieve JSON data from the request body
            $input = $this->request->getJSON();
    
            // Extract email and password from the input
            $email = $input->email;
            $password = $input->password;
    
            // Find user by email
            $user = $userModel->where('email', $email)->first();
    
            if ($user && password_verify($password, $user['password'])) {
                // Successful signin
                // Create session for the user
                session()->set('user_id', $user['id']);
                session()->set('user_email', $user['email']);
    
                return $this->respond(['message' => 'Login successful'], 200);
            } else {
                // Invalid credentials
                return $this->failUnauthorized('Invalid email or password');
            }
        } catch (\Exception $e) {
            // Log or handle the exception
            return $this->failServerError('Error signing in: ' . $e->getMessage());
        }
    }
}