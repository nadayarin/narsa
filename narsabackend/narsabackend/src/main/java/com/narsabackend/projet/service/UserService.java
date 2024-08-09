package com.narsabackend.projet.service;

import com.narsabackend.projet.dao.RoleDao;
import com.narsabackend.projet.dao.UserDao;
import com.narsabackend.projet.entity.Role;
import com.narsabackend.projet.entity.User;
import com.narsabackend.projet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleDao.save(adminRole);

        Role avocatRole = new Role();
        avocatRole.setRoleName("Avocat");
        avocatRole.setRoleDescription("Default role for newly created record");
        roleDao.save(avocatRole);

        User adminUser = new User();
        adminUser.setUserName("narsa");
        adminUser.setUserPassword(getEncodedPassword("N123"));
        adminUser.setUserFirstName("admin");
        adminUser.setUserLastName("admin");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userDao.save(adminUser);

        User avocat = new User();
        avocat.setUserName("firstlawyer");
        avocat.setUserPassword(getEncodedPassword("law124"));
        avocat.setUserFirstName("raj");
        avocat.setUserLastName("sharma");
        Set<Role> userRoles = new HashSet<>();
       userRoles.add(avocatRole);
        avocat.setRole(userRoles);
      userDao.save(avocat);
    }

    public User registerNewUser(User user) {
        Role role = roleDao.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        return userDao.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    public boolean resetPassword(String username, String oldPassword, String newPassword) {
        User user = userRepository.findByUserName(username);
        if (user != null && passwordEncoder.matches(oldPassword, user.getUserPassword())) {
            user.setUserPassword(passwordEncoder.encode(newPassword));
            userRepository.save(user);
            return true;
        }
        return false;
    }
}
