package csci310.service;

import csci310.domain.User;
import csci310.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrivacyService {
    @Autowired
    UserRepository ur;

    public void setNewBlocked(String block)
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = ((UserDetailsImpl) auth.getPrincipal()).getUsername();
        User user = ur.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        List<User> blocked = user.getBlocked();
        User blockusr = ur.findByUsername(block)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + block));
        blocked.add(blockusr);
        user.setBlocked(blocked);
        ur.save(user);
    }

    public void setNewUnblocked(String unblock)
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = ((UserDetailsImpl) auth.getPrincipal()).getUsername();
        User user = ur.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        List<User> blocked = user.getBlocked();
        User blockusr = ur.findByUsername(unblock)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + unblock));
        blocked.remove(blockusr);
        user.setBlocked(blocked);
        ur.save(user);
    }

    public List<User> getBlocked()
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = ((UserDetailsImpl) auth.getPrincipal()).getUsername();
        User user = ur.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        return user.getBlocked();
    }
}
